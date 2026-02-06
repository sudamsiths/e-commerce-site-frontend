import { useState } from "react";
import NikeLogo from "../../assets/images/Nike.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../ui/Toast";

function LoginPage() {
    const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);


  const Response = async()=>{
    try{
      const Data = await axios.post("http://localhost:8080/api/v1/users/signIn",{
      email: loginData.email,
      password: loginData.password})

      if(Data.status === 200){
        setLoginData({
          email: "",
          password: "",
        });
        setToast({
          message: "Login successful! Redirecting to dashboard...",
          type: "success"
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }    
      else {
        setToast({
          message: "Login failed. Please check your credentials.",
          type: "error"
        });
      }
    }
    catch(error){
      console.error("Login failed:", error);
      setToast({
        message: "Login failed. Please try again.",
        type: "error"
      });
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-linear-to-br from-gray-900 via-black to-indigo-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm animate-fade-in">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img alt="Your Logo" src={NikeLogo} className="mx-auto h-50 w-auto drop-shadow-2xl" />
          </div>
          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-indigo-200 mb-2"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                value={loginData.email}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e)=>{setLoginData({...loginData, email: e.currentTarget.value})}}
                  className="block w-full rounded-xl bg-white/10 px-4 py-3 text-base text-white border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white/15"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-indigo-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <button
                    type="button"
                    className="font-semibold text-indigo-300 hover:text-indigo-200 bg-none border-none cursor-pointer p-0 transition-colors duration-200 underline decoration-dashed"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                value={loginData.password}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-xl bg-white/10 px-4 py-3 pr-12 text-base text-white border-2 border-white/20 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white/15"
                  placeholder="Enter your password"
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
              <button
                type="button"
                onClick={Response}
                className="flex w-full justify-center rounded-xl bg-linear-to-r from-indigo-600 to-indigo-500 px-4 py-3 text-base font-bold text-white shadow-xl hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-indigo-600 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            Not a member?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-semibold text-indigo-300 hover:text-indigo-200 bg-none border-none cursor-pointer p-0 transition-colors duration-200 underline decoration-wavy"
            >
              Sign Up Here
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
