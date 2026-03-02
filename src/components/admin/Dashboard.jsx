import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Check, X, Phone, Calendar, Clock, LogOut, Edit2, Trash2 } from 'lucide-react';

const Dashboard = ({ user }) => {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState('all');
    const [editingBooking, setEditingBooking] = useState(null);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setBookings(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return unsubscribe;
    }, []);

    const handleStatus = async (id, status, booking) => {
        try {
            await updateDoc(doc(db, 'bookings', id), { status });

            // Only notify if accepted or rejected
            if (status === 'accepted' || status === 'rejected') {
                const message = status === 'accepted'
                    ? `Hello ${booking.name}, your appointment for ${booking.service} on ${booking.date} at ${booking.time} at Sapphire Salon has been *ACCEPTED*. See you then!`
                    : `Hello ${booking.name}, unfortunately we cannot accommodate your appointment for ${booking.service} on ${booking.date} at ${booking.time}. Please contact us for rescheduling.`;

                const encodedMsg = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${booking.phone.replace(/\D/g, '')}?text=${encodedMsg}`;
                window.open(whatsappUrl, '_blank');
            }
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            try {
                await deleteDoc(doc(db, 'bookings', id));
            } catch (error) {
                console.error("Delete error:", error);
            }
        }
    };

    const startEdit = (booking) => {
        setEditingBooking(booking.id);
        setEditForm({ ...booking });
    };

    const handleSaveEdit = async () => {
        try {
            const { id, ...data } = editForm;
            await updateDoc(doc(db, 'bookings', id), data);
            setEditingBooking(null);
        } catch (error) {
            console.error("Save error:", error);
        }
    };

    const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h2>Booking Management</h2>
                <button className="btn-logout" onClick={() => auth.signOut()}>
                    <LogOut size={18} /> Logout
                </button>
            </div>

            <div className="dashboard-stats grid-3">
                <div className="stat-card">
                    <span>Total</span>
                    <h3>{bookings.length}</h3>
                </div>
                <div className="stat-card pending">
                    <span>Pending</span>
                    <h3>{bookings.filter(b => b.status === 'pending').length}</h3>
                </div>
                <div className="stat-card accepted">
                    <span>Accepted</span>
                    <h3>{bookings.filter(b => b.status === 'accepted').length}</h3>
                </div>
            </div>

            <div className="filter-bar">
                {['all', 'pending', 'accepted', 'rejected'].map(f => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="booking-list">
                {filteredBookings.length === 0 ? (
                    <p className="no-bookings">No {filter} bookings found.</p>
                ) : (
                    filteredBookings.map(b => (
                        <div key={b.id} className={`booking-item status-${b.status}`}>
                            <div className="b-info">
                                <h4>{b.name}</h4>
                                <div className="b-meta">
                                    <span>{b.service}</span>
                                    <span><Calendar size={14} /> {b.date}</span>
                                    <span><Clock size={14} /> {b.time}</span>
                                    <span><Phone size={14} /> {b.phone}</span>
                                </div>
                                <div className="b-date-badge">
                                    Appointment for: <strong>{b.date}</strong> at <strong>{b.time}</strong>
                                </div>
                            </div>
                            <div className="b-actions">
                                <button className="act-edit" onClick={() => startEdit(b)} title="Edit Booking">
                                    <Edit2 size={18} />
                                </button>
                                <button className="act-delete" onClick={() => handleDelete(b.id)} title="Delete Booking">
                                    <Trash2 size={18} />
                                </button>
                                {b.status === 'pending' && (
                                    <>
                                        <button className="act-accept" onClick={() => handleStatus(b.id, 'accepted', b)} title="Accept & Notify WhatsApp">
                                            <Check size={20} />
                                        </button>
                                        <button className="act-reject" onClick={() => handleStatus(b.id, 'rejected', b)} title="Reject & Notify WhatsApp">
                                            <X size={20} />
                                        </button>
                                    </>
                                )}
                                {b.status !== 'pending' && (
                                    <span className={`status-badge ${b.status}`}>{b.status}</span>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Edit Modal */}
            {editingBooking && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal">
                        <h3>Edit Appointment</h3>
                        <div className="edit-grid">
                            <div className="input-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <label>Phone (WhatsApp)</label>
                                <input
                                    type="text"
                                    value={editForm.phone}
                                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <label>Service</label>
                                <select
                                    value={editForm.service}
                                    onChange={(e) => setEditForm({ ...editForm, service: e.target.value })}
                                >
                                    <option value="Hair Styling">Hair Styling</option>
                                    <option value="Skin Treatment">Skin Treatment</option>
                                    <option value="Bridal Makeup">Bridal Makeup</option>
                                    <option value="Spa & Wellness">Spa & Wellness</option>
                                </select>
                            </div>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        value={editForm.date}
                                        onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Time</label>
                                    <select
                                        value={editForm.time}
                                        onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                                    >
                                        {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"].map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button className="btn-save" onClick={handleSaveEdit}>Save Changes</button>
                            <button className="btn-cancel" onClick={() => setEditingBooking(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
