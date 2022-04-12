import About from "./pages/About/index";
import Admin from './pages/Admin/index';
import Contact from "./pages/Contact/index";
import Home from "./pages/Home/index";
import Login from './pages/Auth/index';
import Portfolio from "./pages/Portfolio/index";
import News from './pages/News/index';
import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACT_ROUTE, HOME_ROUTE, AUTH_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, PORTFOLIO_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";
import Auth from "./pages/Auth/index";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: Portfolio
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth

    },


];