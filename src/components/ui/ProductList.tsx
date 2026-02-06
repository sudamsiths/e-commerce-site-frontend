function ProductList() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 min-h-screen py-12">
        <div className="container ml-auto mr-auto flex flex-wrap items-start px-4">
          <div className="w-full pl-5 lg:pl-2 mb-8 mt-4">
            <h1 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-extrabold tracking-tight">
              Best Sellers
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Discover our most popular products
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 m-h-64 p-3 transform hover:-translate-y-3 hover:shadow-2xl transition duration-500 ease-in-out group">
              <figure className="mb-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <img
                  src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
                  alt="iPhone 11 Pro Max"
                  className="h-64 ml-auto mr-auto transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  NEW
                </div>
              </figure>
              <div className="rounded-xl p-5 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 shadow-md flex flex-col gap-3">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-tight mb-1">
                    iPhone 11 Pro Max
                  </h5>
                  <span className="text-sm text-purple-200 leading-none font-medium">
                    And then there was Pro.
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-2xl text-white font-bold tracking-wide">
                    $1099<span className="text-sm">.00</span>
                  </div>
                  <button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 w-12 h-12 flex ml-auto transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 m-h-64 p-3 transform hover:-translate-y-3 hover:shadow-2xl transition duration-500 ease-in-out group">
              <figure className="mb-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-4">
                <img
                  src="https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png"
                  alt="iPhone 11"
                  className="h-64 ml-auto mr-auto transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  HOT
                </div>
              </figure>
              <div className="rounded-xl p-5 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 shadow-md flex flex-col gap-3">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-tight mb-1">
                    iPhone 11
                  </h5>
                  <span className="text-sm text-purple-200 leading-none font-medium">
                    Just the right amount of everything.
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-2xl text-white font-bold tracking-wide">
                    $699<span className="text-sm">.00</span>
                  </div>
                  <button className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 w-12 h-12 flex ml-auto transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 m-h-64 p-3 transform hover:-translate-y-3 hover:shadow-2xl transition duration-500 ease-in-out group">
              <figure className="mb-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-slate-200 p-4">
                <img
                  src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"
                  alt="iPhone XR"
                  className="h-64 ml-auto mr-auto transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  SALE
                </div>
              </figure>
              <div className="rounded-xl p-5 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 shadow-md flex flex-col gap-3">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-tight mb-1">
                    iPhone XR
                  </h5>
                  <span className="text-sm text-gray-300 leading-none font-medium">
                    Brilliant. In every way.
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-2xl text-white font-bold tracking-wide">
                    $599<span className="text-sm">.00</span>
                  </div>
                  <button className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300 w-12 h-12 flex ml-auto transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 m-h-64 p-3 transform hover:-translate-y-3 hover:shadow-2xl transition duration-500 ease-in-out group">
              <figure className="mb-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-red-100 to-orange-100 p-4">
                <img
                  src="https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png"
                  alt="iPhone SE"
                  className="h-64 ml-auto mr-auto transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  DEAL
                </div>
              </figure>
              <div className="rounded-xl p-5 bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 shadow-md flex flex-col gap-3">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-tight mb-1">
                    iPhone SE
                  </h5>
                  <span className="text-sm text-gray-300 leading-none font-medium">
                    Lots to love. Less to spend.
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-2xl text-white font-bold tracking-wide">
                    $399<span className="text-sm">.00</span>
                  </div>
                  <button className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300 w-12 h-12 flex ml-auto transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
