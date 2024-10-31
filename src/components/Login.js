import { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
        //dispatch action from hooks
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
        <form className="login-form">
            <span className='welcome'>Welcome Back!</span>
            <label className='label'>
                <input type="text" placeholder='Email' onChange={handleInput}/>
            </label>
            <label className='label'>
                <input type="password" placeholder='Password' onChange={handleInput}/>
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;