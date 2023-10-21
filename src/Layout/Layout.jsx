import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    const siteConfig = useLoaderData()
    const updatedSiteInfo = siteConfig[siteConfig.length - 1]

    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar updatedSiteInfo={updatedSiteInfo}></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer updatedSiteInfo={updatedSiteInfo}></Footer>
        </div>
    );
};

export default Layout;