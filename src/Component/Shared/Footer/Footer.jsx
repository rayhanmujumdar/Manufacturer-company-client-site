import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '/src/firebase/firebase.init';
import logo from '/src/image/logo/company logo.png';

export default function Footer() {
    const years = new Date().getFullYear();
    const [user] = useAuthState(auth);
    return (
        <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
            <div className="container mx-auto">
                <div className="xl:grid xl:grid-cols-12 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-4">
                        <div className="uppercase font-bold mb-2.5 text-gray-800 flex items-start">
                            <img
                                className="max-md:col-span-2"
                                src={logo}
                                alt="lws"
                            />
                            <span className="text-white">Computer Market</span>
                        </div>
                        <ul role="list" className="space-y-4">
                            {location.pathname === '/' ? (
                                <li>
                                    <a
                                        href="#topOfHome"
                                        className="text-sm cursor-pointer"
                                    >
                                        Home{' '}
                                    </a>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/" className="text-sm">
                                        Home{' '}
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link to="/products" className="text-sm">
                                    Product{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews" className="text-sm">
                                    Review{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-sm">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-portfolio" className="text-sm">
                                    My Portfolio
                                </Link>
                            </li>
                            <li>
                                {user && (
                                    <Link to="/dashboard" className="text-sm">
                                        Dashboard{' '}
                                    </Link>
                                )}
                            </li>
                        </ul>
                        <ul role="list" className="space-y-4">
                            <li>
                                <a href="#" className="text-sm">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Cookies Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Manage Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Accessibility
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <ul role="list" className="list-none mb-0 flex gap-x-5">
                            <li className="w-10 h-10 text-center leading-10 rounded-full text-white bg-[#0675E9] hover:bg-stone-500">
                                <a
                                    href="https://github.com/rayhanmujumdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="w-10 h-10 text-center leading-10 rounded-full text-white bg-[#E34133] hover:bg-stone-500">
                                <a
                                    href="https://github.com/rayhanmujumdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-google"></i>
                                </a>
                            </li>
                            <li className="w-10 h-10 text-center leading-10 rounded-full text-white bg-[#0C69C4] hover:bg-stone-500">
                                <a
                                    href="https://github.com/rayhanmujumdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="w-10 h-10 text-center leading-10 rounded-full text-white bg-black hover:bg-stone-500">
                                <a
                                    href="https://github.com/rayhanmujumdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 mt-10 flex items-start gap-4 xl:col-span-5 xl:mt-0">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold">
                                Subscribe and be informed our newest products
                                and offers.
                            </h3>
                            <p className="mt-2 text-sm leading-6">
                                All the days headlines and highlights, direct to
                                you every morning..
                            </p>
                        </div>
                        <button className="rounded-full bg-[#00D991] px-7 py-2.5 text-xs font-medium text-[#F1EFEA] hover:opacity-80 lg:text-base">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mt-6 lg:mt-12">
                <p className="text-center">
                    Copyright &copy;{years} | All rights reserved by computer
                    market website
                </p>
            </div>
        </footer>
    );
}
