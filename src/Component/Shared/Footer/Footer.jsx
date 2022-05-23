import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import logo from '../../../image/logo/company logo.png'

const Footer = () => {
    const year = new Date().getFullYear()
    const [user] = useAuthState(auth)
    return (
      <footer className="bg-gray-100 text-center lg:text-left">
      <div className="container p-6 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:justify-items-center justify-items-start">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800 flex items-start">
              <img src={logo} alt="" />
              <span>Computer Market</span>
              
            </h5>
            <p className='text-left'>There might be many tips and tricks that you can use to get your content seen, but nothing works quite as well as creating high quality content. If you focus on creating unique content that valuable.</p>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800 ">Quick move</h5>
            <ul className="list-none mb-0 flex flex-col items-start">
              <li>
                 <Link to="/" className="text-gray-800 hover:underline hover:text-blue-600">Home </Link>
              </li>
              <li>
                 <Link to="/products" className="text-gray-800 hover:underline hover:text-blue-600">Product </Link>
              </li>
              <li>
                 <Link to="/reviews" className="text-gray-800 hover:underline hover:text-blue-600">Review </Link>
              </li>
              <li>
                 {user && <Link to="/dashboard" className="text-gray-800 hover:underline hover:text-blue-600">Dashboard </Link>}
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase text-left font-bold mb-2.5 text-gray-800">Links</h5>
            <ul className="list-none mb-0 flex gap-x-5">
              <li className='w-10 h-10 text-center leading-10 rounded-full text-white bg-stone-600 hover:bg-stone-500'>
                 <a href="https://github.com/rayhanmujumdar" target="_blank" rel="noreferrer"><i  className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li className='w-10 h-10 text-center leading-10 rounded-full text-white bg-stone-600 hover:bg-stone-500'>
              <a href="https://github.com/rayhanmujumdar" target="_blank" rel="noreferrer"><i  className="fa-brands fa-google"></i></a>
              </li>
              <li className='w-10 h-10 text-center leading-10 rounded-full text-white bg-stone-600 hover:bg-stone-500'>
              <a href="https://github.com/rayhanmujumdar" target="_blank" rel="noreferrer"><i  className="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li className='w-10 h-10 text-center leading-10 rounded-full text-white bg-stone-600 hover:bg-stone-500'>
              <a href="https://github.com/rayhanmujumdar" target="_blank" rel="noreferrer"><i  className="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © {year} Copyright:
         <Link to="" className="text-gray-800" href="https://tailwind-elements.com/"> Computer Parts Manufacturer </Link>
      </div>
    </footer>
    );
};

export default Footer;