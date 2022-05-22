import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <footer className="bg-gray-100 text-center lg:text-left">
      <div className="container p-6 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:justify-items-center justify-items-start">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-gray-800">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-gray-800">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-gray-800">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-gray-800">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-gray-800">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © {year} Copyright:
        <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
      </div>
    </footer>
    );
};

export default Footer;