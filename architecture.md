# IrrigaFlow Smart Irrigation Cloud - Architecture & Setup

## 1. Final Folder Structure

```
AWS_sem4finalproject/
├── frontend/                     # React + Vite application (Vanilla CSS)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                      # Node.js + Express backend (MVC architecture)
│   ├── routes/                   # Express routes
│   ├── controllers/              # Request handlers
│   ├── services/                 # Business logic
│   ├── middleware/               # Express middleware (Auth, Audit logs, etc.)
│   ├── scripts/                  # Backend specific scripts
│   ├── uploads/                  # Uploads directory
│   └── logs/                     # Application logs
├── database/                     # Database files
│   └── schema.sql                # MySQL Schema definition
├── storage/                      # Storage directories
│   ├── local/
│   └── s3/
├── infra/                        # Infrastructure & Evaluation artifacts
│   ├── architecture-diagram/
│   ├── pricing/
│   └── screenshots/
├── aws/                          # AWS configurations
│   ├── iam/
│   ├── ec2/
│   ├── rds/
│   └── cloudwatch/
├── scripts/                      # Automation scripts
│   ├── start.sh
│   ├── backup.sh
│   └── health-check.sh
├── .env                          # Environment variables
├── .env.example                  # Example Environment variables
├── Dockerfile                    # Docker configuration
└── docker-compose.yml            # Docker Compose configuration
```

## 2. Database Schema

- **users**: id, username, password, created_at, updated_at
- **sites**: id, user_id, name, location, status, created_at, updated_at
- **usage_records**: id, site_id, water_consumed_liters, duration_minutes, recorded_at, created_at, updated_at
- **alerts**: id, site_id, message, active, date, created_at, updated_at
- **cost_estimations**: id, site_id, estimated_cost, created_at, updated_at

*A seed user is included in the schema.*

## 3. API List

### Authentication
- `POST /login` - Session-based login
- `POST /logout` - Clear session

### Irrigation Sites
- `GET /sites` - Retrieve all irrigation sites
- `POST /sites` - Add a new irrigation site
- `GET /sites/:id` - Retrieve a specific site
- `PUT /sites/:id` - Update an irrigation site
- `DELETE /sites/:id` - Delete an irrigation site

### Water Usage
- `GET /usage` - Retrieve usage records
- `POST /usage` - Add a new usage record

### Alerts
- `GET /alerts` - Retrieve active alerts
- `POST /alerts` - Create a new alert

### Reports & Costs
- `GET /reports` - Fetch aggregate report data
- `GET /costs` - Fetch estimated cost data for sites

### System & Monitoring
- `GET /health` - Health endpoint to verify application is running
- `GET /metrics` - Returns CPU placeholder, Memory placeholder, Storage placeholder, Active Users

## 4. Installation Commands

**Prerequisites:**
- Node.js (v18+)
- MySQL (v8+)
- (Optional) Docker

**Step 1: Setup Database**
1. Ensure MySQL is running locally.
2. Execute the schema file:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

**Step 2: Environment Variables**
Ensure the `.env` file is present in the root directory and update `LOCAL_DB` and other variables as needed.

**Step 3: Install Dependencies**
*Backend:*
```bash
cd backend
npm install
```

*Frontend:*
```bash
cd frontend
npm install
```

**Step 4: Run Application (Local Development)**
*Backend:*
```bash
cd backend
npm run dev
```

*Frontend:*
```bash
cd frontend
npm run dev
```

*(Note: Application code is not generated yet. These commands will work once the `package.json` and application code are implemented.)*
