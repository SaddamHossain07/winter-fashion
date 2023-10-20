import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Authentication/Login";
import Products from "../Pages/AddProduct/Products/Products";
import Register from "../Pages/Authentication/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SiteConfig from "../Pages/Dashboard/SiteConfig";
import CreateBrand from "../Pages/Dashboard/CreateBrand";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://winter-fashion-server-hazel.vercel.app/products')
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
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
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/site-config',
                        element: <SiteConfig></SiteConfig>
                    },
                    {
                        path: '/dashboard/create-brand',
                        element: <CreateBrand></CreateBrand>
                    }
                ]
            }
        ],
        loader: () => fetch('http://localhost:5000/site')
    }
])

export default Routes;