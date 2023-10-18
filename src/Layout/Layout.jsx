import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            This is main layout
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;