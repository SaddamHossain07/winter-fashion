import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";

const Home = () => {
    const brands = useLoaderData()

    return (
        <div >
            <Banner></Banner>
            <div className="mt-16 text-center">
                <h1 className="text-3xl font-bold text-center">Brands</h1>
                <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 justify-center">
                    {
                        brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;