import React, { useState, useEffect } from 'react'
import DashboardCard from '../components/DashboardCard'
import { Map, Activity, Bell, CircleDollarSign } from 'lucide-react'

function Dashboard() {
  const [data, setData] = useState({
    totalSites: 0,
    waterConsumed: 0,
    activeAlerts: 0,
    estimatedCost: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/dashboard')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch dashboard data');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading dashboard...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'var(--danger)' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Dashboard Overview</h1>
      
      <div className="dashboard-grid">
        <DashboardCard 
          title="Total Sites" 
          value={data.totalSites} 
          icon={<Map size={24} />} 
          color="var(--primary)" 
        />
        <DashboardCard 
          title="Water Consumed" 
          value={`${data.waterConsumed} L`} 
          icon={<Activity size={24} />} 
          color="var(--accent)" 
        />
        <DashboardCard 
          title="Active Alerts" 
          value={data.activeAlerts} 
          icon={<Bell size={24} />} 
          color="var(--danger)" 
        />
        <DashboardCard 
          title="Estimated Cost" 
          value={`$${data.estimatedCost}`} 
          icon={<CircleDollarSign size={24} />} 
          color="var(--warning)" 
        />
      </div>

      <div className="glass" style={{ padding: '24px', minHeight: '300px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.1rem' }}>Recent Activity Placeholder</h2>
        <p style={{ color: 'var(--text-muted)' }}>No recent activity to display.</p>
      </div>
    </div>
  )
}

export default Dashboard
