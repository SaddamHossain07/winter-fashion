import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";

const Home = () => {
    const brands = useLoaderData()

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('https://b8a10-brandshop-server-side-saddam-hossain0743.vercel.app/products')
            .then(data => {
                setAllProducts(data.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    return (
        <div >
            <Banner></Banner>
            <div className="mt-24 text-center">
                <h1 className="text-3xl font-bold text-center">Our Brands</h1>
                <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 justify-center">
                    {
                        brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }

                </div>
            </div>

            <div className="mt-24 text-center">
                <div>
                    <img src="https://i.ibb.co/LvFpQ0X/banner-2.png" alt="" />
                </div>

                <h1 className="text-3xl font-bold text-center mt-24">All Products</h1>
                <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 justify-center">
                    {
                        allProducts ? (
                            allProducts.map(product => <Product key={product._id} product={product}></Product>)
                        ) : (
                            <p>Loading products...</p>
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;