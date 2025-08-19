import React, { useState } from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg rounded-t-lg mb-6 flex justify-between items-center flex-wrap">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <nav className="mt-4 sm:mt-0">
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = ({ userName }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="bg-white p-8 rounded-lg shadow-xl mb-6 flex-grow">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome, {userName}!
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        This is a simple React application built to showcase fundamental
        concepts like components, props, and state management. We've used
        Tailwind CSS for a modern and responsive design.
      </p>

      {/* Interactive Feature: Counter */}
      <div className="flex flex-col items-center justify-center p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-md">
        <p className="text-2xl font-semibold text-blue-700 mb-4">
          Current Count: <span className="text-blue-900 text-4xl">{count}</span>
        </p>
        <button
          onClick={incrementCount}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Increment Counter
        </button>
      </div>

      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          What you can learn here:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            How to structure a React application with multiple components.
          </li>
          <li>
            Passing data from parent to child components using{" "}
            <code className="bg-gray-200 p-1 rounded">props</code>.
          </li>
          <li>
            Managing component-specific data and reactivity with{" "}
            <code className="bg-gray-200 p-1 rounded">useState</code> hook.
          </li>
          <li>
            Styling React components efficiently with{" "}
            <code className="bg-gray-200 p-1 rounded">Tailwind CSS</code>.
          </li>
        </ul>
      </div>
    </main>
  );
};

const Footer = ({ year }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center rounded-b-lg mt-6">
      <p className="text-sm">
        &copy; {year} React Basics App. All rights reserved.
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Header title="My React Practice App" />
        <MainContent userName="Developer" />
        <Footer year={new Date().getFullYear()} />
      </div>
    </div>
  );
};

export default App;
