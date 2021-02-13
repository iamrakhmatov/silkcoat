function AboutUs() {
  return (
    <div className="w-full bg-white bg-gradient-to-b from-gray-100 via-primary-50 to-gray-100 border-t border-gray-200 md:border-0">
      <section className=" text-gray-600 body-font py-14 sm:pt-20 sm:pb-10">
        <div className="container px-5 mx-auto">
          <h1 className="font-serif sm:text-3xl text-3xl font-bold title-font text-gray-600 mb-10 text-center tracking-wide">
            О Нас
          </h1>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 975.036 975.036"
              className="text-primary-500 w-10 mx-auto mb-2"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.&nbsp;
              <span className="hidden sm:inline">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </span>
            </p>
            <span className="inline-block h-1 w-12 rounded bg-primary-500 mt-8 mb-6"></span>
            <h2 className="text-gray-500 font-bold title-font tracking-wider text-md font-mono">
              Silkcoat Uzbekistan
            </h2>
          </div>
        </div>
      </section>
      <div className="w-full md:w-2/3 mx-auto border-b border-primary-800 border-opacity-40"></div>
      {/* ---------------- WHY CHOOSE US ----------------- */}
      <section className="text-gray-600 body-font ">
        <div className="lg:container px-1 pt-10 pb-20 mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif sm:text-3xl text-3xl font-bold title-font text-gray-600 text-center tracking-wide">
              Почему <span className="hidden sm:inline-block ">Именно</span> Мы?
            </h1>
          </div>
          <div className="flex flex-col md:flex-row sm:items-center sm:justify-center">
            <div className="py-4 px-2 md:px-4 md:w-1/3 flex sm:flex-col sm:text-center sm:items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 inline-flex items-center justify-center rounded-md sm:rounded-full bg-primary-100 text-primary-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-clock-history w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className="flex-grow ml-5 sm:ml-0">
                <h2 className="text-gray-600 text-xl mb-3 font-semibold">
                  Долговечность
                </h2>
                <p className="text-lg lg:px-10 text-gray-500">
                  Краски Silkcoat долговечны и прослужат долго.
                </p>
              </div>
            </div>
            <div className="py-4 px-2 md:px-4 md:w-1/3 flex sm:flex-col sm:text-center sm:items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 inline-flex items-center justify-center rounded-md sm:rounded-full bg-primary-100 text-primary-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-thermometer-half w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.75a.25.25 0 0 1 .25.25v9.02a1.5 1.5 0 1 1-.5 0V2A.25.25 0 0 1 8 1.75z" />
                  <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="flex-grow ml-5 sm:ml-0">
                <h2 className="text-gray-600 text-xl mb-3 font-semibold">
                  Теплоизоляция
                </h2>
                <p className="text-lg sm:px-10 md:px-0 lg:px-10 text-gray-500">
                  Стены, окрашенные продукцией Silkcoat, обладают отличной
                  теплоизоляцией
                </p>
              </div>
            </div>
            <div className="py-4 px-2 md:px-4 md:w-1/3 flex sm:flex-col sm:text-center sm:items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 inline-flex items-center justify-center rounded-md sm:rounded-full bg-primary-100 text-primary-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-droplet-fill w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                  />
                </svg>
              </div>
              <div className="flex-grow ml-5 sm:ml-0">
                <h2 className="text-gray-600 text-xl mb-3 font-semibold">
                  Без влаги
                </h2>
                <p className="text-lg lg:px-10 text-gray-500">
                  Стены из шелка не будут иметь влаги.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
