import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="mt-10" >
            <nav className="flex justify-between items-center pb-6">
                <h3 className="text-xl font-bold text-blue-500 text-center">Dashboard</h3>

                <div className="flex gap-6">
                    <Link to='/dashboard/site-config'>Site Configuration</Link>
                    <Link to='/dashboard/create-brand'>Create Brand</Link>
                </div>
            </nav>
            <hr />

            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;