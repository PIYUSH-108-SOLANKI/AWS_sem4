import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Droplets, LayoutDashboard, Map, Activity, BarChart3, Bell, CircleDollarSign } from 'lucide-react'

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Irrigation Sites', path: '/sites', icon: <Map size={20} /> },
    { name: 'Water Usage', path: '/usage', icon: <Activity size={20} /> },
    { name: 'Reports', path: '/reports', icon: <BarChart3 size={20} /> },
    { name: 'Alerts', path: '/alerts', icon: <Bell size={20} /> },
    { name: 'Pricing', path: '/pricing', icon: <CircleDollarSign size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Droplets color="var(--primary)" />
        <span>IrrigaFlow</span>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${path === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
