import Navbar from "../ui/Navbar"
import Carousel from "../ui/Carousel"
import ProductList from "../ui/ProductList"


function Dashboad() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-900">
     <Navbar />
     <Carousel />
      <ProductList />
    </div>
  )
}

export default Dashboad