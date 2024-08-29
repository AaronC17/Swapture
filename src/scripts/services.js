const API_URL = 'http://localhost:5000/api';

const fetchServices = async () => {
    try {
        const response = await fetch(`${API_URL}/services`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (!response.ok) throw new Error('Failed to fetch services');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

const createService = async (serviceData) => {
    try {
        const response = await fetch(`${API_URL}/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(serviceData),
        });
        if (!response.ok) throw new Error('Failed to create service');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export { fetchServices, createService };
