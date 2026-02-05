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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-auto mb-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Logo" src={NikeLogo} className="mx-auto h-50 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
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
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <button
                    type="button"
                    className="font-semibold text-indigo-400 hover:text-indigo-300 bg-none border-none cursor-pointer p-0"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <input
                value={loginData.password}
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={Response}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-semibold text-indigo-400 hover:text-indigo-300 bg-none border-none cursor-pointer p-0"
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
