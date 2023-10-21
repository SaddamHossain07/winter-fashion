import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SiteConfig from "../Pages/Dashboard/SiteConfig";
import CreateBrand from "../Pages/Dashboard/CreateBrand";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import PrivateRout from "./PrivateRout/PrivateRout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/brands')
            },
            {
                path: '/addProduct',
                element: <PrivateRout><AddProduct></AddProduct></PrivateRout>,
            },
            {
                path: '/products/:id',
                element: <PrivateRout><ViewDetail></ViewDetail></PrivateRout>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/products/${params.id}`)
            },
            {
                path: '/products/update/:id',
                element: <PrivateRout><UpdatePage></UpdatePage></PrivateRout>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/products/${params.id}`)
            },
            {
                path: '/products/brand/:brandName',
                element: <BrandProducts />,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/products/brand/${params.brandName}`)
            },
            {
                path: '/myCart',
                element: <PrivateRout><MyCart></MyCart></PrivateRout>,
                loader: () => fetch(`https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/cart`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <SiteConfig></SiteConfig>
                    },
                    {
                        path: '/dashboard/create-brand',
                        element: <CreateBrand></CreateBrand>
                    }
                ]
            }
        ],
        loader: () => fetch('https://b8a10-brandshop-server-side-saddam-hossain07.vercel.app/site')
    }
])

export default Routes;