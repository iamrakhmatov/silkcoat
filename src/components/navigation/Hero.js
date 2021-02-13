import { Transition } from "@headlessui/react";
import bg from "../../assets/img2.jpeg";
import bgMD from "../../assets/slide1.jpg";
import logo from "../../assets/logo.png";

function Hero(props) {
  return (
    <div className="relative bg-white overflow-hidden lg:h-screen">
      {/* BACKGROUND IMAGE */}
      <div className="md:absolute sm:inset-y-0 sm:right-0 md:w-full lg:w-4/6 ">
        <img
          className="hidden lg:block h-full w-full object-cover "
          src={bg}
          alt="silkcoat background"
        />
        <img
          className="block lg:hidden h-full w-full object-cover "
          src={bgMD}
          alt="silkcoat background"
        />
      </div>
      {/*--------------- HERO SECTION -----------------*/}
      <div className="lg:h-full bg-gray-100 pb-3">
        <div className="relative z-10 bg-transparent h-full lg:max-w-md flex flex-col justify-between">
          {/* -------- Skew Element ------------- */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-2/3"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          {/* --------------- LAPTOP NAVIGATION --------------- */}
          <div className="fixed top-0 w-full md:relative pt-2 sm:pt-4 lg:pt-8 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 "
              aria-label="Global"
            >
              {/*------------------ LOGO & HAMBURGER--------------------*/}
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Silkcoat</span>
                    <img
                      className="h-6 sm:h-7 w-auto md:h-8"
                      src={logo}
                      alt="silkcoat"
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={props.toggler}
                      type="button"
                      className="text-primary-500 hover:text-primary-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                      id="main-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open main menu</span>
                      {/*<!-- Heroicon name: outline/menu -->*/}
                      <svg
                        className="h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* ---------------- ANCHOR TAGS ----------------*/}
              <div className="hidden md:flex md:ml-10 md:pr-2 md:space-x-7 lg:flex lg:items-center lg:ml-12 ">
                <a
                  href="/"
                  className="font-medium text-primary-900 hover:text-primary-800 md:text-gray-700 md:hover:text-gray-500 mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-house-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                </a>

                <a
                  href="/"
                  className="font- font-semibold text-gray-500 md:text-primary-600 tracking-wider lg:text-gray-500 hover:text-primary-700 w-max"
                >
                  О Нас
                </a>

                <a
                  href="/"
                  className="font-semibold text-gray-500 md:text-primary-600 tracking-wider lg:text-gray-500 hover:text-primary-700"
                >
                  Продукты
                </a>

                <a
                  href="/"
                  className="font-semibold text-gray-500 md:text-primary-600 tracking-wider lg:text-gray-500 hover:text-primary-700 "
                >
                  Услуги
                </a>

                <a
                  href="/"
                  className="font-semibold text-gray-500 md:text-primary-600 tracking-wider lg:text-gray-500 hover:text-gray-900 lg:text-primary-600 lg:hover:text-gray-900"
                >
                  Контакты
                </a>
              </div>
            </nav>
          </div>
          {/* <!-----------MOBILE MENU ----------->*/}
          <Transition
            show={props.isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className=" fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 py-2 flex items-center justify-between bg-gray-50">
                  <div>
                    <img
                      className="h-6 sm:h-7 w-auto md:h-8"
                      src={logo}
                      alt="silkcoat"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={props.toggler}
                      type="button"
                      className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-primary-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close main menu</span>
                      {/*<!-- Heroicon name: outline/x -->*/}
                      <svg
                        className="h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div
                    className="px-2 py-5 sm:py-8 space-y-1 text-center"
                    role="none"
                  >
                    <a
                      href="/"
                      className="tracking-wide block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      О Нас
                    </a>

                    <a
                      href="/"
                      className="tracking-wide block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Продукты
                    </a>

                    <a
                      href="/"
                      className="tracking-wide block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Наши Услуги
                    </a>
                  </div>
                  <div
                    role="none"
                    className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-2"
                  >
                    <a
                      href="/"
                      className="flex px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:text-gray-900"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-house-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                        />
                      </svg>
                      <span className="hidden sm:block font-semibold text-md ml-3 text-black tracking-wide">
                        Главная
                      </span>
                    </a>
                    <a
                      href="/"
                      className="flex px-5 py-3 text-center font-medium text-primary-700 hover:text-gray-900"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                      <span className="hidden sm:block font-semibold text-md ml-3 text-black tracking-wide">
                        Контакты
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <main className="max-w-2xl sm:mx-auto md:mx-0 px-4 sm:px-6 lg:px-8 my-10 sm:my-12 md:mt-24 md:mb-12 lg:mb-20 xl:mb-40 lg:relative lg:z-10 ">
            <div className="sm:text-center md:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl lg:text-6xl">
                <span className="block xl:inline">Learn more about </span>
                <span className="block text-primary-600 xl:inline">
                  Effect Paints
                </span>
              </h1>
              <p className="mt-3 sm:mx-auto md:mx-0 text-gray-500 md:text-gray-100 lg:text-gray-500 sm:mt-5 text-lg sm:max-w-md md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 text-lg md:py-3 md:px-8 lg:py-4 lg:px-10"
                  >
                    Посмотреть
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-primary-900 bg-primary-100 hover:bg-primary-200 text-lg md:py-3 sm:px-10 md:px-12 lg:py-4 lg:px-14"
                  >
                    Узнать
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero;
