import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Privacy from './Privacy'
import './index.css'
import Support from './Support' // <--- 1. Import the new page
import Terms from './Terms'       // <--- ADD THIS IMPORT

// Detect Safari specifically to fix its unique translucent UI issues
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  document.documentElement.classList.add('is-safari');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />    {/* <--- ADD THIS LINE */}
        <Route path="/support" element={<Support />} /> {/* <--- 2. Add this line */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)