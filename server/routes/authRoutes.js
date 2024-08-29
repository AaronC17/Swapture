const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

// Ruta para registrar un nuevo usuario
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Verificar si los campos están completos
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Verificar si el usuario ya existe
    const checkUserQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
    db.query(checkUserQuery, [username, email], (err, result) => {
        if (err) {
            console.error("Error ejecutando la consulta:", err);
            return res.status(500).json({ message: "Error en el servidor" });
        }

        if (result.length > 0) {
            return res.status(409).json({ message: "El nombre de usuario o email ya están en uso" });
        }

        // Insertar el nuevo usuario en la base de datos
        const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(insertUserQuery, [username, email, password], (err, result) => {
            if (err) {
                console.error("Error ejecutando la consulta:", err);
                return res.status(500).json({ message: "Error al registrar el usuario" });
            }

            res.status(201).json({ message: "Usuario registrado con éxito" });
        });
    });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar si los campos están completos
    if (!username || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Verificar el usuario en la base de datos
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, result) => {
        if (err) {
            console.error("Error ejecutando la consulta:", err);
            return res.status(500).json({ message: "Error al iniciar sesión" });
        }

        if (result.length > 0) {
            const user = result[0];

            // Verificar si la contraseña es correcta
            if (user.password === password) {
                res.status(200).json({ message: "Inicio de sesión exitoso" });
            } else {
                res.status(401).json({ message: "Nombre de usuario o contraseña incorrectos" });
            }
        } else {
            res.status(401).json({ message: "Nombre de usuario o contraseña incorrectos" });
        }
    });
});

module.exports = router;
