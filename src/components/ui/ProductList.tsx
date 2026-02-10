import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import Toast from "./Toast";

interface Product {
  id: string | number;
  name: string;
  description: string;
  imageUrls: string[];
  price: number;
  stockQuantity: number;
  category: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedItems, setAddedItems] = useState<Set<string | number>>(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/products/getall");
      console.log("Products:", res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imageUrls: string[]) => {
    if (!imageUrls || imageUrls.length === 0) {
      return "https://via.placeholder.com/300x300/9333EA/FFFFFF?text=No+Image";
    }
    // If it's a relative path, prepend the backend URL
    const imageUrl = imageUrls[0];
    if (imageUrl.startsWith('/uploads')) {
      return `http://localhost:8080${imageUrl}`;
    }
    return imageUrl;
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: getImageUrl(product.imageUrls),
      category: product.category,
      description: product.description,
    });

    // Show success animation
    setAddedItems((prev) => new Set(prev).add(product.id));
    setToastMessage(`${product.name} added to cart! 🎉`);
    setShowToast(true);
    
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-white">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-white">
        No products found 😕
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto flex flex-wrap items-start px-4">

        {/* Header */}
        <div className="w-full pl-5 lg:pl-2 mb-8 mt-4">
          <h1 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-extrabold tracking-tight">
            Best Sellers
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
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
                  src={getImageUrl(product.imageUrls)}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x300/9333EA/FFFFFF?text=No+Image";
                  }}
                  className="h-64 w-full object-contain mx-auto transform group-hover:scale-110 transition duration-500"
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

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className={`rounded-full text-white hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 w-12 h-12 flex ml-auto transition-all duration-300 ${
                      addedItems.has(product.id) 
                        ? 'bg-green-600 hover:bg-green-600' 
                        : 'bg-purple-900 hover:bg-white hover:text-purple-900'
                    }`}
                  >
                    {addedItems.has(product.id) ? (
                      <Check className="m-auto w-6 h-6" />
                    ) : (
                      <ShoppingCart className="m-auto w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default ProductList;
