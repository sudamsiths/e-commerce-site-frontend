import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Dashboad from '../pages/Dashboad'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboad />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes