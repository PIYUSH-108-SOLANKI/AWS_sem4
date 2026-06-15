import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="glass login-box">
        <h1 style={{ color: 'var(--primary)' }}>IrrigaFlow</h1>
        <p>Smart Irrigation Cloud</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button 
            type="submit" 
            style={{ 
              background: 'var(--primary)', 
              color: 'white', 
              border: 'none', 
              padding: '12px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
