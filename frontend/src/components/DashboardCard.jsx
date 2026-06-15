import React from 'react'

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="glass card hover-lift">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="card-title">{title}</span>
        <div style={{ color: color }}>{icon}</div>
      </div>
      <div className="card-value">{value}</div>
    </div>
  )
}

export default DashboardCard
