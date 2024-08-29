const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); // Ajusta la ruta si es necesario
const serviceRoutes = require('./routes/serviceRoutes'); // Ajusta la ruta si es necesario

const app = express();
const port = 5066;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'src'
app.use(express.static(path.join(__dirname, '../src')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Home.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Dashboard.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Settings.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Register.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Profile.html'));
});

app.get('/createservice', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/CreateService.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
