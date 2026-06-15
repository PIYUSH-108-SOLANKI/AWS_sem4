const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        // Simple query to test the database connection
        await db.query('SELECT 1');
        res.json({
            status: "ok",
            database: "connected"
        });
    } catch (error) {
        console.error('Database connection error in health check:', error.message);
        res.status(500).json({
            status: "error",
            database: "disconnected"
        });
    }
});

module.exports = router;
