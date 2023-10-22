import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

const BrandProducts = () => {
    const brand = useLoaderData()
    const { brandName } = useParams()
    console.log(brand)
    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-saddam-hossain0743.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])


    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3RSBHfs/10.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VTcWSLc/11.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZfQz0qN/2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/mTnNDGk/5.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div>
                {brand.length != 0 ? <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-16">{
                    brand?.map(product => <Card key={product._id} product={product}></Card>)}
                </div>
                    :
                    <div className="text-center mt-24 space-y-6">
                        <h3 className="text-5xl font-bold text-red-500">Opps! </h3>
                        <p className="text-xl text-blue-600"> you have not added any product for <span className="text-2xl font-semibold">{brandName.toUpperCase()}</span> brand yet!</p>
                        <Link to='/addProduct'>
                            <button className="w-1/4 btn btn-primary my-10">Add Product</button>
                        </Link>
                    </div>

                }
            </div>
        </div>
    );
};

export default BrandProducts;