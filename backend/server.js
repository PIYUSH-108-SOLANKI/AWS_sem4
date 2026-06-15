const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const healthRoute = require('./routes/health');
const dashboardRoute = require('./routes/dashboard');
app.use('/health', healthRoute);
app.use('/dashboard', dashboardRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
