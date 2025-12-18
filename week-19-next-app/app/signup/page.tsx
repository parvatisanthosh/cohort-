"use client"

import axios from "axios";
import { useState } from "react";

export default function Signin() {  // removed "async"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/details", {
            username,
            password
        });
        console.log(response.data);
    };

    return (
        <div>
            signin page
            <input 
                type="text" 
                placeholder="email" 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="password" 
                onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleSignin}>Sign In</button>
        </div>
    );
}