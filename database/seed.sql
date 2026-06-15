USE irrigation_db;

-- Seed Sites
INSERT IGNORE INTO sites (id, user_id, name, location, status) VALUES 
(1, 1, 'North Field', 'Sector A', 'active'),
(2, 1, 'East Orchard', 'Sector B', 'active'),
(3, 1, 'West Vineyard', 'Sector C', 'inactive'),
(4, 1, 'Greenhouse 1', 'Sector D', 'active'),
(5, 1, 'South Pasture', 'Sector E', 'active');

-- Seed Usage
INSERT IGNORE INTO usage_records (site_id, water_consumed_liters, duration_minutes, recorded_at) VALUES 
(1, 150.5, 45, NOW() - INTERVAL 1 DAY),
(2, 200.0, 60, NOW() - INTERVAL 1 DAY),
(3, 0.0, 0, NOW() - INTERVAL 1 DAY),
(4, 300.25, 90, NOW()),
(5, 120.75, 30, NOW());

-- Seed Alerts
INSERT IGNORE INTO alerts (site_id, message, active, date) VALUES 
(1, 'Low pressure detected', 1, NOW()),
(2, 'Valve malfunction', 1, NOW()),
(3, 'System offline', 0, NOW() - INTERVAL 2 DAY);

-- Seed Cost Estimations
INSERT IGNORE INTO cost_estimations (site_id, estimated_cost) VALUES 
(1, 45.50),
(2, 60.00),
(3, 0.00),
(4, 90.75),
(5, 36.25);
