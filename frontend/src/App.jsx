import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sites from './pages/Sites'
import Usage from './pages/Usage'
import Reports from './pages/Reports'
import Alerts from './pages/Alerts'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sites" element={<Sites />} />
        <Route path="usage" element={<Usage />} />
        <Route path="reports" element={<Reports />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  )
}

export default App
