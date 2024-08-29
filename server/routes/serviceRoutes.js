// server/routes/serviceRoutes.js
const express = require('express');
const promisePool = require('../config/dbConfig');

const router = express.Router();

// Middleware para autenticar
const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No autorizado' });

  jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ error: 'No autorizado' });
    req.user = decoded;
    next();
  });
};

// Obtener todos los servicios
router.get('/', authenticate, async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM services');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
});

// Crear un nuevo servicio
router.post('/', authenticate, async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const [result] = await promisePool.query(
      'INSERT INTO services (title, description, price, user_id) VALUES (?, ?, ?, ?)',
      [title, description, price, req.user.id]
    );
    res.status(201).json({ id: result.insertId, title, description, price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
});

module.exports = router;
