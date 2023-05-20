import React from "react";
import Logo from "../assets/logo.png";
import { Collapse, Dropdown, initTE } from "tw-elements";

initTE({ Collapse, Dropdown });

const Hearder = (props) => {
  return (
    // <!-- Main navigation container -->
    <nav
      className="flex-no-wrap relative rounded  border border-cyan-300 flex w-full items-center justify-between py-2 my-2 shadow-md lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        
        <div className="lg:hidden mx-auto">
            <a
              className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="/"
            >
              <img
                className="mr-2"
                src={Logo}
                style={{ height: "20px" }}
                alt=""
                loading="lazy"
              />
              <span className="font-medium text-white">BitGO</span>
            </a>
          </div>

          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
          <div className="lg:pr-2 mx-5  mt-2">
            <a
              className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="/"
            >
              <img
                className="mr-2"
                src={Logo}
                style={{ height: "20px" }}
                alt=""
                loading="lazy"
              />
              <span className="font-medium text-white">BitGO</span>
            </a>
          </div>
            <ul
              className=" cursor-pointer  list-style-none mt-3 mr-auto flex flex-col justify-center align-middle pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 mx-5 lg:mb-0 lg:pr-2 active" data-te-nav-item-ref>
                <a
                  className="text-gray-300 hover:text-cyan-300 focus:text-cyan-300 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-cyan-300 dark:[&.active]:text-cyan-300"
                 href="/"
                  data-te-nav-link-ref
                >
                  Market
                </a>
              </li>
              <li className="mb-4 mx-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="text-gray-300 hover:text-cyan-300 focus:text-cyan-300 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-cyan-300 dark:[&.active]:text-cyan-300"
                  href="/trending"
                  data-te-nav-link-ref
                >
                  Trending
                </a>
              </li>
              <li className="mb-4 mx-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="text-gray-300 hover:text-cyan-300 focus:text-cyan-300 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-cyan-300 dark:[&.active]:text-cyan-300"
                  href="/faourite"
                  data-te-nav-link-ref
                >
                  Favourite
                </a>
              </li>
            </ul>
          </div>
        {/* <!-- Collapsible navigation container --> */}
      </div>
    </nav>
  );
};

export default Hearder;
