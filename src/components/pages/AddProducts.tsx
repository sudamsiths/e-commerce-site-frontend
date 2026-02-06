import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Toast from "../ui/Toast";
import axios from "axios";

function AddProducts() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "FASHION",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      setToast({
        message: "Please select an image",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("stockQuantity", productData.stockQuantity);
      formData.append("category", productData.category);
      formData.append("images", imageFile);

      const response = await axios.post(
        "http://localhost:8080/api/v1/products/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status === 200 || response.status === 201) {
        setProductData({
          name: "",
          description: "",
          price: "",
          stockQuantity: "",
          category: "FASHION",
        });
        setImageFile(null);
        setImagePreview("");

        setToast({
          message: "Product added successfully!",
          type: "success",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    } catch (error) {
      console.error("Product Add failed:", error);
      setToast({
        message: "Failed to add product. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900">
        <Navbar />

        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-extrabold tracking-tight">
                Add New Product
              </h1>
              <p className="text-gray-300 mt-2 text-lg">
                Fill in the details to add a product to your store
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl shadow-2xl p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Product Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={productData.name}
                    onChange={(e) =>
                      setProductData({ ...productData, name: e.target.value })
                    }
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={productData.description}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400 resize-none"
                    placeholder="Enter product description"
                  />
                </div>

                {/* Price */}
                <div>
                  <label
                    htmlFor="price"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Price ($)
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={productData.price}
                    onChange={(e) =>
                      setProductData({ ...productData, price: e.target.value })
                    }
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="0.00"
                  />
                </div>

                {/* Stock Quantity */}
                <div>
                  <label
                    htmlFor="stock"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Stock Quantity
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    required
                    min="0"
                    value={productData.stockQuantity}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        stockQuantity: e.target.value,
                      })
                    }
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="0"
                  />
                </div>

                {/* Category */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="category"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={productData.category}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        category: e.target.value,
                      })
                    }
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300"
                  >
                    <option value="FASHION" className="bg-gray-800">
                      Fashion
                    </option>
                    <option value="ELECTRONICS" className="bg-gray-800">
                      Electronics
                    </option>
                    <option value="HOME_APPLIANCES" className="bg-gray-800">
                      Home Appliances
                    </option>
                    <option value="BOOKS" className="bg-gray-800">
                      Books
                    </option>
                    <option value="TOYS" className="bg-gray-800">
                      Toys
                    </option>
                    <option value="SPORTS" className="bg-gray-800">
                      Sports
                    </option>
                  </select>
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="image"
                    className="text-indigo-200 text-sm font-semibold mb-2 block"
                  >
                    Product Image
                  </label>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="image"
                      className="cursor-pointer bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl border-2 border-white/20 hover:border-indigo-500 transition-all duration-300 font-semibold text-sm"
                    >
                      Choose File
                    </label>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <span className="text-gray-400 text-sm">
                      {imageFile ? imageFile.name : "No file chosen"}
                    </span>
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-indigo-200 text-sm font-semibold mb-2">
                        Preview:
                      </p>
                      <div className="bg-white/10 rounded-xl p-4 border-2 border-white/20">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-64 mx-auto rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 text-base font-bold tracking-wide rounded-xl cursor-pointer text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Adding Product..." : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProducts;
