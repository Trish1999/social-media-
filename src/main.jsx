import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <div className="container">
    <Login />
    </div>
  </>,
)
