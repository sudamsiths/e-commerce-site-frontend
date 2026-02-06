import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/products/getall");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        No products found 😕
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 min-h-screen py-12">
      <div className="container mx-auto flex flex-wrap items-start px-4">

        {/* Header */}
        <div className="w-full pl-5 lg:pl-2 mb-8 mt-4">
          <h1 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-extrabold tracking-tight">
            Best Sellers
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Discover our most popular products
          </p>
        </div>

        {/* Products */}
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3 transform hover:-translate-y-3 hover:shadow-2xl transition duration-500 group">

              {/* Image */}
              <figure className="mb-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-64 mx-auto transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  NEW
                </div>
              </figure>

              {/* Content */}
              <div className="rounded-xl p-5 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 shadow-md flex flex-col gap-3">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-tight mb-1">
                    {product.name}
                  </h5>
                  <span className="text-sm text-purple-200 font-medium">
                    {product.description}
                  </span>
                </div>

                {/* Price & Button */}
                <div className="flex items-center mt-2">
                  <div className="text-2xl text-white font-bold tracking-wide">
                    ${product.price}
                  </div>

                  <button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 w-12 h-12 flex ml-auto transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
