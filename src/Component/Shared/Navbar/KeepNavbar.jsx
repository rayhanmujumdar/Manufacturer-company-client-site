import { signOut } from 'firebase/auth';
import { Button, Navbar } from 'keep-react';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import useNav from '../../../Hooks/useNav';
import auth from '../../../firebase/firebase.init';
import logo from '../../../image/logo/company logo.png';
import SearchModal from '../Search/SearchModal';
import CustomNavLink from './CustomNavLink';

const paths = [
    {
        id: 1,
        linkName: 'home',
        name: 'Home',
    },
    {
        id: 2,
        linkName: 'products',
        name: 'Products',
    },
    {
        id: 3,
        linkName: 'reviews',
        name: 'Reviews',
    },
    {
        id: 4,
        linkName: 'blog',
        name: 'My Blog',
    },
    {
        id: 5,
        linkName: 'my-portfolio',
        name: 'My Portfolio',
    },
    {
        id: 7,
        linkName: 'dashboard',
        name: 'Dashboard',
        private: true,
    },
];

export default function KeepNavbar() {
    const [user] = useAuthState(auth);
    const [nav] = useNav();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const navList = (
        <>
            {paths.map(path => {
                if (!path?.private) {
                    return (
                        <li key={path.id}>
                            <CustomNavLink to={path.linkName}>
                                {path.name}
                            </CustomNavLink>
                        </li>
                    );
                } else if (user) {
                    return (
                        <li key={path.id}>
                            <CustomNavLink to={path.linkName}>
                                {path.name}
                            </CustomNavLink>
                        </li>
                    );
                }
            })}
        </>
    );
    return (
        <>
            {isOpen && (
                <SearchModal
                    isOpen={isOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            )}
            <div
                className={`${
                    nav ? 'fixed z-50 top-0 bg-gray-100 w-full' : 'container'
                }`}
            >
                <Navbar
                    fluid={false}
                    className={`${nav && 'container'} bg-gray-100`}
                >
                    <Navbar.Container className="flex items-center justify-between py-5">
                        <Navbar.Container className="flex items-center">
                            <Navbar.Brand className="hidden lg:block">
                                <Link
                                    to="/"
                                    className="text-xl font-bold mb-2.5 text-gray-800 flex justify-start items-start"
                                >
                                    <img
                                        src={logo}
                                        alt="keep"
                                        width="50"
                                        height="40"
                                    />
                                    <span className="font-mono">
                                        Computer Market
                                    </span>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Divider></Navbar.Divider>
                            <Navbar.Container
                                tag="ul"
                                className="lg:flex hidden items-center justify-between gap-8 "
                            >
                                {navList}
                            </Navbar.Container>
                            <Navbar.Collapse
                                collapseType="fullWidth"
                                className="bg-transparent backdrop-blur-xl"
                            >
                                <Navbar.Container
                                    tag="ul"
                                    className="flex flex-col gap-5 justify-center items-center"
                                >
                                    {pathname.includes('/dashboard') && (
                                        <label
                                            htmlFor="my-dashboard"
                                            className="btn btn-xs h-10 mr-3 btn-primary drawer-button lg:hidden"
                                        >
                                            Open Dashboard
                                        </label>
                                    )}
                                    {navList}
                                </Navbar.Container>
                            </Navbar.Collapse>
                        </Navbar.Container>

                        <Navbar.Container className="flex gap-2">
                            <Button
                                onClick={openModal}
                                size="sm"
                                variant="link"
                            >
                                <span>
                                    <MagnifyingGlass size={20} color="#444" />
                                </span>
                                <span className="ml-2 text-metal-600">
                                    Search
                                </span>
                            </Button>

                            {user ? (
                                <Button
                                    size="sm"
                                    color="primary"
                                    variant="outline"
                                    onClick={() => {
                                        signOut(auth);
                                        localStorage.removeItem('accessToken');
                                    }}
                                >
                                    Sign out
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    color="primary"
                                    variant="outline"
                                >
                                    <Link to="/login">Login</Link>
                                </Button>
                            )}
                            <Navbar.Toggle />
                        </Navbar.Container>
                    </Navbar.Container>
                </Navbar>
            </div>
        </>
    );
}
