import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="w-full md:flex md:justify-between">
          <div className="mb-6 w-full md:mb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className="flex w-full items-center max-md:justify-center "
            >
              <span className="self-center whitespace-nowrap text-4xl font-semibold text-[#226cff] dark:text-white">
                TAG IT
              </span>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <h2 className="text-sm font-bold uppercase text-gray-900 dark:text-white">
              Project Repository :
            </h2>
            <ul className="font-medium text-gray-600 dark:text-gray-400">
              <li className="">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/harshAswani1109/post-it"
                  className="hover:underline"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Post It. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
