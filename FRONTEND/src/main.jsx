import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
// import CustomNavbar from './components/customnavbar.jsx'
import 'rsuite/dist/rsuite.min.css';
// import CustomSideNav from './components/CustomSideNav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <CustomNavbar/>
    <CustomSideNav/> */}
  </React.StrictMode>,
)
