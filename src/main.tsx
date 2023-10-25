import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import NavbarWrapper from './Components/Navbar.tsx';
import './index.css';
import NotFound from './Pages/404.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { ParallaxProvider } from 'react-scroll-parallax';

const router = createHashRouter([
    {
        path: '/',
        element: <NavbarWrapper />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-0ybz-svi.us.auth0.com"
            clientId="7pXkEn0jveKijFzES0VTOeck0EJjel8r"
            useRefreshTokens={true}
            cacheLocation='localstorage'
            authorizationParams={{
                redirect_uri: window.location.href
            }}
        >
            <ParallaxProvider>
                <RouterProvider router={router} />
            </ParallaxProvider>
        </Auth0Provider>
    </React.StrictMode>,
)
