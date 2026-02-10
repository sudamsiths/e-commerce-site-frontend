import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useCart } from '../../context/CartContext';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors" onClick={()=>navigate("/dashboard")}>
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Continue Shopping</span>
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          <p className="text-slate-600 mt-2">{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">Add some items to get started!</p>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all" onClick={()=>navigate("/dashboard")}>
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative group">
                      <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                          >
                            <Minus className="w-4 h-4 text-slate-700" />
                          </button>
                          <span className="w-12 text-center font-bold text-lg text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
                          >
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-3 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 transition-all group"
                        >
                          <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Item Total:</span>
                    <span className="text-xl font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (10%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="font-semibold">
                        <span className="text-green-600">FREE</span>
                    </span>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-slate-900">Total</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5" />
                  Proceed to Checkout
                </button>

                {/* Additional Info */}
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;