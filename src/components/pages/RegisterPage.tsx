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
                <input
                  id="password"
                  value={userData.password}
                  onChange={(e)=>{
                    setUserData({...userData, password: e.currentTarget.value})
                  }
                  }
                  name="password"
                  type="password"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="text-indigo-200 text-sm font-semibold mb-2 block"
                >
                  Confirm Password
                </label>
                <input
                  id="cpassword"
                  value={userData.confirmPassword}
                  onChange={(e)=>{
                    setUserData({...userData, confirmPassword: e.currentTarget.value})
                  }
                  }
                  name="cpassword"
                  type="password"
                  className="bg-white/10 hover:bg-white/15 focus:bg-white/15 w-full text-sm text-white px-4 py-3 rounded-xl border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400"
                  placeholder="Confirm your password"
                />
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
