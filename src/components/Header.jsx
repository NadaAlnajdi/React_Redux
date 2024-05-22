import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
    useEffect(() => {
        const navbar = document.getElementById('main-navbar');
        const threshold = 400;

        const handleScroll = () => {
            if (window.scrollY > threshold) {
                navbar.classList.add('bg-dark');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('bg-dark');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light sticky-top bg-transparent">
            <div className="container-fluid fs-5">
                <a className="navbar-brand fs-2 me-5" style={{ color: '#13ADB7' }} href="#">Book Store</a>
                <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler" data-bs-target="#navbarNavDropdown" data-bs-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link " }} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                        <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link " }} to="/books">Books</NavLink>

                        </li>
                        <li className="nav-item mx-4">
                         <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link " }} to="/books/edit/0">new Book</NavLink>
                        </li>
                        {/* <li className="nav-item mx-4">
                            <a aria-current="page" className="nav-link text-white" href="/search">     
                                <i className="fa-solid fa-magnifying-glass fa-beat-fade"></i> search
                            </a>
                        </li> */}
                    {/* </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <a aria-current="page" className="nav-link active text-capitalize " style={{ color: '#13ADB7' }} href="/profile">Nada</a>
                        </li>
                        <li className="nav-item mx-4">
                            <form action="/logout" method="post" style={{ backgroundColor: '#13ADB7' }} className="btn">
                                <input className="text-light border-0 bg-transparent" type="submit" value="Logout" />
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <a aria-current="page" style={{ backgroundColor: '#13ADB7' }} className="btn text-light nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <a aria-current="page" style={{ backgroundColor: '#13ADB7' }} className="btn text-light nav-link" href="/register">Register</a>
                        </li>
                    </ul> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
