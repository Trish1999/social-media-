import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx';


createRoot(document.getElementById('root')).render(
  <>
  <div className="container">
    <Home />
    </div>
  </>,
)
