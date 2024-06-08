import { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password } = credentials;

        if (username === 'user' && password === 'password') {
            setIsInvalid(false);
            setIsLoggedIn(true);
        } else {
            setIsInvalid(true);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {isInvalid && <p>Invalid username or password</p>}
            {!isLoggedIn ? (
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            name="username"
                            type="text"
                            value={credentials.username}
                            onChange={handleInputChange}
                            placeholder="username"
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            placeholder="password"
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Welcome, user!</p>
            )}
        </div>
    );
};

export default Login;
