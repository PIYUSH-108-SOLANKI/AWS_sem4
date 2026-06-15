# IrrigaFlow Smart Irrigation Cloud 💧

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

IrrigaFlow is a comprehensive cloud platform designed to centralize operational management, analytics, and reporting for Smart Irrigation & Water Conservation operations. This project was developed to demonstrate enterprise-grade cloud deployments for the B.Tech CSE Semester IV AWS Cloud Engineering Case Study.

## 🌟 Key Features
- **Cloud Architecture:** Designed for high availability and scalability using AWS resources.
- **Containerized Stack:** Fully dockerized frontend, backend, and database for seamless multi-environment deployments.
- **Automated Operations:** Custom Linux shell scripts (`cron`) for database backups and system health monitoring.
- **Operational Dashboard:** Real-time visibility into water consumption, active alerts, and site status.
- **Cost Analysis Engine:** Built-in dashboard to calculate SLA-based pricing, Disaster Recovery (RPO/RTO) costs, and compute infrastructure totals.

## 🏗️ Technical Stack
- **Frontend:** React + Vite, Vanilla CSS (Custom Glassmorphism UI)
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Local & AWS RDS)
- **Infrastructure:** AWS EC2, Amazon S3, AWS CloudWatch, IAM Roles

## 🚀 Quick Start (Local Docker Testing)

The entire application can be spun up locally using Docker Compose without needing to connect to AWS.

1. **Clone the repository**
   ```bash
   git clone https://github.com/PIYUSH-108-SOLANKI/AWS_sem4.git
   cd AWS_sem4
   ```

2. **Start the containers**
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**
   - **Frontend UI:** http://localhost:5173
   - **Backend API:** http://localhost:3001

## 📁 Project Structure
- `/frontend` - React User Interface and Components
- `/backend` - Express API, Routes, and Controllers
- `/database` - SQL Schemas and DB Seed scripts
- `/scripts` - Linux Automation scripts (Backup, Health Check)
- `/docker-compose.yml` - Multi-container orchestration

## ☁️ AWS Disaster Recovery & Deployment Strategy
*Please see the included `architecture.md` and `DEPLOYMENT_NOTES.md` files for the full AWS cloud infrastructure transition plan, including EC2 deployments, RDS snapshots, S3 bucket storage, and cross-region disaster recovery objectives.*
