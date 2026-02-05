import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const RegisterUser = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/users/createUser", {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      userName: userData.userName
    });
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
    });
  }

  return (
    <>
      <div className="min-h-screen bg-black py-12">
        <div className="text-center bg-linear-to-r min-h-50 sm:p-6 p-4 rounded-t-2xl max-w-4xl max-md:max-w-xl mx-4 md:mx-auto">
          <h1 className="sm:text-4xl text-3xl text-white font-bold mt-8">
            Create your free account
          </h1>
          <p className="text-indigo-100 text-sm mt-3">
            Join us today and start your journey
          </p>
        </div>

        <div className="mx-4 mb-8 -mt-16">
          <form className="max-w-4xl max-md:max-w-xl mx-auto bg-black shadow-2xl sm:p-8 p-6 rounded-b-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
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
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
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
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
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
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label
                  htmlFor="Username"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
                >
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  value={userData.userName}
                  onChange={(e)=>{
                    setUserData({...userData, userName: e.currentTarget.value})
                  }
                  }
                  type="text"
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Enter user name"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
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
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="text-slate-900 text-sm font-semibold mb-2 block"
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
                  className="bg-slate-50 focus:bg-white w-full text-sm text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-0 transition-all"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={RegisterUser}
                className="w-full py-3.5 px-5 text-sm font-semibold tracking-wide rounded-lg cursor-pointer text-white bg-linear-to-r from-indigo-600 focus:outline-0 focus:ring-4 focus:ring-indigo-300 transition-all shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="font-semibold text-indigo-600 hover:text-indigo-500 bg-none border-none cursor-pointer p-0 underline"
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
