import React from 'react'
import { User, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Welcome Back, Admin</h2>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
          <User size={20} />
          <span>Admin Profile</span>
        </div>
        <Link to="/login" style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </header>
  )
}

export default Topbar
