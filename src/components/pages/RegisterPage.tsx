import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../ui/Toast";


function RegisterPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

const RegisterUser = async () => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/users/createUser", {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      username: userData.username
    });
    
    if (response.status === 200 || response.status === 201) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
      });
      setToast({
        message: "Registration successful! Redirecting to login...",
        type: "success"
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  } catch (error) {
    console.error("Registration failed:", error);
    setToast({
      message: "Registration failed. Please try again.",
      type: "error"
    });
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
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-indigo-900 py-12">
        <div className="text-center bg-linear-to-r from-indigo-600 via-indigo-500 to-indigo-600 min-h-50 sm:p-6 p-4 rounded-t-2xl max-w-4xl max-md:max-w-xl mx-4 md:mx-auto shadow-2xl animate-fade-in">
          <h1 className="sm:text-4xl text-3xl text-white font-bold mt-8 drop-shadow-lg">
            Create your free account
          </h1>
          <p className="text-indigo-50 text-sm mt-3 font-medium">
            Join us today and start your journey
          </p>
        </div>

        <div className="mx-4 mb-8 -mt-16">
          <form className="max-w-4xl max-md:max-w-xl mx-auto bg-white/5 backdrop-blur-xl shadow-2xl sm:p-8 p-6 rounded-b-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  name="name"
                  onChange={(e)=>{
                    setUserData({...userData, firstName: e.currentTarget.value})
                  }
                  }
                  type="text"
                  value={userData.firstName}
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  Last Name
                </label>
                <input
                  id="lname"
                  value={userData.lastName}
                  name="lname"
                  onChange={(e)=>{
                    setUserData({...userData, lastName: e.currentTarget.value})
                  }
                  }
                  type="text"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  onChange={(e)=>{
                    setUserData({...userData, email: e.currentTarget.value})
                  }
                  }
                  value={userData.email}
                  type="email"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={(e)=>{
                    setUserData({...userData, username: e.currentTarget.value})
                  }
                  }
                  type="text"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    value={userData.password}
                    onChange={(e)=>{
                      setUserData({...userData, password: e.currentTarget.value})
                    }
                    }
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 pr-12 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-300 transition-colors duration-200 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="cpassword"
                    value={userData.confirmPassword}
                    onChange={(e)=>{
                      setUserData({...userData, confirmPassword: e.currentTarget.value})
                    }
                    }
                    name="cpassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 pr-12 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-300 transition-colors duration-200 focus:outline-none"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={RegisterUser}
                className="w-full py-4 px-6 text-base font-bold tracking-wide rounded-xl cursor-pointer text-white bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 focus:outline-0 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-1"
              >
                Create Account
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="font-semibold text-indigo-300 hover:text-indigo-200 bg-none border-none cursor-pointer p-0 underline decoration-wavy transition-colors duration-200"
              >
                Sign in here
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
