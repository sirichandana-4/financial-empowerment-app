import React, { useState } from "react";
import firebaseConfig from "../services/firebaseConfig"; // ✅ Corrected import path
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const auth = getAuth(); // Firebase authentication instance

    const handleAuth = async () => {
        try {
            if (isLogin) {
                // Login existing user
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login Successful");
            } else {
                // Register new user
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Signup Successful");
            }
        } catch (error) {
            console.error("Authentication Error:", error.message);
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>{isLogin ? "Login" : "Sign Up"}</button>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </p>
        </div>
    );
};

export default Auth;
