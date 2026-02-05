import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes