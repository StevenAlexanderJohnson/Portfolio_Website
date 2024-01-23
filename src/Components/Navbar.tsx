import { Outlet, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import construction from '../assets/construction barrier.png';
import linkedin from '../assets/LinkedIn.png';
import github from '../assets/github.png';

export default function NavbarWrapper() {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
    const navigate = useNavigate();

    const authButton = isAuthenticated == true
        ? <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => logout()}>Logout</button>
        : <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100  hidden sm:block" onClick={() => loginWithRedirect()}>Login</button>;

    return (
        <Fragment>
            <div className="flex flex-col sm:flex-row justify-between px-5 pt-3">
                <button className="hover:text-accent-light dark:hover:text-accent-dark drop-shadow-lg transition-colors duration-100" onClick={() => {
                    navigate('/');
                }}>
                    Steven Johnson
                </button>
                <div className="flex justify-between md:flex-row gap-2 md:gap-7 lg:gap-10">
                    <div className="flex flex-row gap-3">
                    <a href="https://www.linkedin.com/in/steven-alexander-johnson/" target="_blank">
                        <img src={linkedin} alt="linkedin" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/StevenAlexanderJohnson/" target="_blank">
                        <img src={github} alt="linkedin" className="w-8 h-8" />
                    </a>
                    </div>
                    <button className="hover:text-accent-light dark:hover:text-accent-dark drop-shadow-lg transition-colors duration-100" onClick={() => {
                        setTimeout(() => {
                            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                        navigate('/');
                    }}>
                        About
                    </button>
                    <button className="hover:text-accent-light dark:hover:text-accent-dark drop-shadow-lg transition-colors duration-100" onClick={() => {
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}>
                        Projects
                    </button>
                    <button className="hover:text-accent-light dark:hover:text-accent-dark drop-shadow-lg transition-colors duration-100" onClick={() => {
                        setTimeout(() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }, 200);
                        navigate('/');
                    }}>
                        Contact
                    </button>
                    <div className="relative before:content-['Blogs_are_still_under_construction.'] before:text-white before:text-center before:absolute before:top-11 before:bg-accent-light before:p-2 before:-right-1/2">
                        <img src={construction} alt="under construction" className="absolute z-10" />
                        <button className="hover:text-accent-light dark:hover:text-accent-dark drop-shadow-lg transition-colors duration-100 -z-10" disabled onClick={() => {
                        }}>
                            Blog
                        </button>
                    </div>
                    {isLoading ? <div>loading...</div> : authButton}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
