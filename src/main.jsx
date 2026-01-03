import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Privacy from './Privacy'
import './index.css'
import Support from './Support' // <--- 1. Import the new page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} /> {/* <--- 2. Add this line */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)