import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    const siteConfig = useLoaderData()
    const updatedSiteInfo = siteConfig[siteConfig.length - 1]

    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar updatedSiteInfo={updatedSiteInfo}></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;