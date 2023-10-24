import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export default function NavbarWrapper() {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
    console.log(isAuthenticated)

    const authButton = isAuthenticated == true
        ? <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => logout()}>Logout</button>
        : <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => loginWithRedirect()}>Login</button>;

    return (
        <Fragment>
            <div className="flex justify-between px-5 pt-3">
                <a href="/" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100">Steven Johnson</a>
                <div className="flex justify-between flex-col sm:flex-row gap-1 sm:gap-10">
                    <button className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100" onClick={() => {
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "end" });
                    }}>About</button>
                    <a href="/projects" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100">Projects</a>
                    <a href="/contact" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-100">Contact</a>
                    {isLoading ? <div>loading...</div> : authButton }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
