import React from 'react'
import DashboardCard from '../components/DashboardCard'
import { Server, Database, Cloud, Shield, Activity, Globe } from 'lucide-react'

function Pricing() {
  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Infrastructure Pricing Estimates</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
        Monthly cost breakdown for AWS Cloud deployment (Production Scale)
      </p>

      <div className="dashboard-grid">
        <DashboardCard 
          title="Compute (EC2)" 
          value="$34.00" 
          icon={<Server size={24} />} 
          color="var(--primary)" 
        />
        <DashboardCard 
          title="Database (RDS)" 
          value="$15.00" 
          icon={<Database size={24} />} 
          color="var(--accent)" 
        />
        <DashboardCard 
          title="Storage (S3 + EBS)" 
          value="$5.50" 
          icon={<Cloud size={24} />} 
          color="var(--warning)" 
        />
        <DashboardCard 
          title="Networking & VPC" 
          value="$10.00" 
          icon={<Globe size={24} />} 
          color="var(--danger)" 
        />
      </div>

      <div className="glass" style={{ padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Detailed Cost Breakdown & SLAs</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '12px 0' }}>Service Component</th>
              <th style={{ padding: '12px 0' }}>Description & SLA</th>
              <th style={{ padding: '12px 0' }}>Monthly Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Server size={16} color="var(--primary)"/> EC2 Instances</td>
              <td style={{ padding: '16px 0', color: 'var(--text-muted)' }}>2x t3.medium (Multi-AZ), 99.99% Uptime</td>
              <td style={{ padding: '16px 0' }}>$34.00</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Database size={16} color="var(--accent)"/> RDS / MySQL</td>
              <td style={{ padding: '16px 0', color: 'var(--text-muted)' }}>db.t3.micro, Automated Backups (RPO: 5 mins, RTO: 1 hr)</td>
              <td style={{ padding: '16px 0' }}>$15.00</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Cloud size={16} color="var(--warning)"/> Storage (S3)</td>
              <td style={{ padding: '16px 0', color: 'var(--text-muted)' }}>50GB Standard Storage + 20GB EBS</td>
              <td style={{ padding: '16px 0' }}>$5.50</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={16} color="#8b5cf6"/> CloudWatch</td>
              <td style={{ padding: '16px 0', color: 'var(--text-muted)' }}>Custom Metrics, Log Retention (30 Days)</td>
              <td style={{ padding: '16px 0' }}>$3.00</td>
            </tr>
            <tr>
              <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={16} color="var(--danger)"/> Disaster Recovery</td>
              <td style={{ padding: '16px 0', color: 'var(--text-muted)' }}>Cross-Region Snapshot Replication</td>
              <td style={{ padding: '16px 0' }}>$8.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="glass" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--accent)' }}>Cost Optimization Recommendations</h2>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0, paddingLeft: '20px' }}>
          <li><strong>Reserved Instances:</strong> Commit to 1-year or 3-year EC2 instances to save up to 40% on compute costs.</li>
          <li><strong>Auto-Scaling:</strong> Implement Auto-Scaling Groups to spin down EC2 instances during off-peak hours (nighttime irrigation downtime).</li>
          <li><strong>S3 Lifecycle Policies:</strong> Automatically transition old irrigation logs to S3 Glacier for cheaper long-term archival.</li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing
