const API_URL = 'http://localhost:5000/api';

const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('Login failed');
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const register = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Registration failed');
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export { login, register };
