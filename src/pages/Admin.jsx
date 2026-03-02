import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../components/admin/Login';
import Dashboard from '../components/admin/Dashboard';

const Admin = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) return <div className="section flex-center">Loading Admin...</div>;

    return (
        <div className="admin-wrapper">
            <nav className="admin-nav">
                <div className="container flex-between">
                    <h1 className="admin-brand">Sapphire <span>Admin</span></h1>
                    <a href="/" className="back-link">View Site</a>
                </div>
            </nav>
            <div className="admin-page section">
                <div className="container">
                    {user ? <Dashboard user={user} /> : <Login />}
                </div>
            </div>
        </div>
    );
};

export default Admin;
