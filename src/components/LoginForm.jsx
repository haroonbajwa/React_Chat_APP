import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "63c6bb77-065b-4a0d-874f-404b7af97bff", 'User-Name': username, 'User-Secret': password }

        try{
            // Username / Password => chatEngine -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            // works out => logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
        } catch(error){
            // error => try with new username
            setError('Oops! Incorrect Credentials.');
        }
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );

}

export default LoginForm;