import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Dashboad from '../pages/Dashboad'
import AddProducts from '../pages/AddProducts'
import Cart from '../pages/Cart'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboad />} />
      <Route path="/add-product" element = {<AddProducts/>}/>
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes