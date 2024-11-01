import { useState } from 'react';
import { useAuth } from "../hooks/AuthProvider.js";
import '../styles/login.css';

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const auth =useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(input)
        if (input.username !== "" && input.password !== "") {
            auth.loginAction(input)
            return
        }
        alert("please provide a valid input");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    return (
        <form className="login-form" onSubmit={handleSubmitEvent}>
            <span className='welcome'>Welcome Back!</span>
            <label className='label'>
                <input type="text" placeholder='Username' name='username' onChange={handleInput}/>
            </label>
            <label className='label'>
                <input type="password" name='password' placeholder='Password' onChange={handleInput}/>
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;