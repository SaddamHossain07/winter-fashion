import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

const Home = () => {
    const brands = useLoaderData()
    const [allProducts, setAllProducts] = useState(null)

    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-saddam-hossain0743.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllProducts(data)
            })
    }, [])
    console.log(allProducts)
    return (
        <div >
            <Banner></Banner>
            <div className="mt-24 text-center">
                <h1 className="text-3xl font-bold text-center">Brands</h1>
                <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 justify-center">
                    {
                        brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }

                </div>
            </div>
            <div className="mt-24">
                <div>
                    <img src="https://i.ibb.co/LvFpQ0X/banner-2.png" alt="" />
                </div>
                <h2 className="text-5xl font-bold logoText my-16 text-center">All Products</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-16">{
                    allProducts?.map(product => <Card key={product._id} product={product}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default Home;