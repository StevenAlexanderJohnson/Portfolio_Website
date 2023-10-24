import { Outlet, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export default function NavbarWrapper() {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
    console.log(isAuthenticated)
    const navigate = useNavigate();

    const authButton = isAuthenticated == true
        ? <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => logout()}>Logout</button>
        : <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => loginWithRedirect()}>Login</button>;

    return (
        <Fragment>
            <div className="flex justify-between px-5 pt-3">
                <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => {
                    navigate('/');
                }}>
                    Steven Johnson
                </button>
                <div className="flex justify-between flex-col sm:flex-row gap-1 sm:gap-10">
                    <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => {
                        navigate('/');
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "end" });
                    }}>
                        About
                    </button>
                    <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => {
                        navigate('/projects');
                    }}>
                        Projects
                    </button>
                    <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => {
                        navigate('/contact');
                    }}>
                        Contact
                    </button>
                    {isLoading ? <div>loading...</div> : authButton}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
