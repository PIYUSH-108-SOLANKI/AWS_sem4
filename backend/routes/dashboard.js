const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const [sites] = await db.query('SELECT COUNT(*) as count FROM sites');
        const [usage] = await db.query('SELECT SUM(water_consumed_liters) as total FROM usage_records');
        const [alerts] = await db.query('SELECT COUNT(*) as count FROM alerts WHERE active = 1');
        const [costs] = await db.query('SELECT SUM(estimated_cost) as total FROM cost_estimations');

        res.json({
            totalSites: sites[0].count || 0,
            waterConsumed: usage[0].total || 0,
            activeAlerts: alerts[0].count || 0,
            estimatedCost: costs[0].total || 0
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
});

module.exports = router;
