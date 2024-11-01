import { useState } from 'react';
import { useAuth } from "../hooks/AuthProvider.js";
import '../styles/login.css';

const Signup = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const auth =useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(input)
        if (input.username !== "" && input.password !== "") {
            if(input.password === input.confirmPassword) {
                auth.signupAction(input)
                return
            }
            alert('passwords do not match')
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
            <span className='welcome'>Sign Up</span>
            <label className='label'>
                <input type="text" placeholder='Username' name='username' onChange={handleInput}/>
            </label>
            <label className='label'>
                <input type="password" name='password' placeholder='Password' onChange={handleInput}/>
            </label>
            <label className='label'>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleInput}/>
            </label>
            <div>
                <button type="submit">Signup</button>
            </div>
        </form>
    )
}

export default Signup;