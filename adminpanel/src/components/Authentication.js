import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import "./authentication.css";

const LOGIN_URL = 'http://localhost:8080/auth/login'; 

const Authentication = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                { login: user, password: pwd },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            if (response.status === 200) {
                Cookies.set('session', response.data.sessionId); 
                window.location.href = '/admin/response-dashboard';
            }
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 401) {
                console.error("Error response:", err.response);
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="container AuthPage">
            <section>
                <p ref={errRef} className={errMsg ? "alert alert-danger" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1 className="text-dark text-center">Login</h1>
                <p className="text-muted text-center">Please login with your details</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="text-dark">Username</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <br></br>
                        <label htmlFor="password" className="text-dark">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="form-control"
                        />
                    </div>
                    <a href="/forgot-password" className="text-primary">Forgot password?</a>
                    <div className="text-center mt-2">
                        <button className="btn-auth btn btn-secondary">Login</button>
                    </div>
                    <a href="/go-back" className="text-center text-dark d-block mt-3">Go back</a>
                </form>
            </section>
        </div>
    )
}

export default Authentication;