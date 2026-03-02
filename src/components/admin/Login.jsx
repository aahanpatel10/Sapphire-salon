import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            // If user doesn't exist, create it for this demo (simplified)
            if (err.code === 'auth/user-not-found') {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                } catch (createErr) {
                    setError("Failed to login. Please check credentials.");
                }
            } else {
                setError("Invalid email or password.");
            }
        }
    };

    return (
        <div className="login-card mini-container">
            <h3>Admin Login</h3>
            <p className="login-hint">Access the booking management system.</p>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className="error-text">{error}</p>}
                <button type="submit" className="btn-premium" style={{ width: '100%' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;
