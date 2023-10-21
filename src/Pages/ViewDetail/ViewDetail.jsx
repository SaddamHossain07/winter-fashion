import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ViewDetail = () => {
    const product = useLoaderData()
    const { user } = useContext(AuthContext)
    const { name, brandName, type, price, rating, description, image } = product

    const handleAddToCart = () => {
        const cartItem = { name, image, user }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product added to cart successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div>
            <div>
                <img src="https://i.ibb.co/9912qbQ/view-detail-banner.png" alt="" />
            </div>
            <h2 className="text-5xl font-bold logoText mt-16 text-center">Product Detail</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
                    {description}
                </Marquee>
            </div>
            <div className="w-10/12 mx-auto flex gap-6 pt-10">
                <div className="w-8/12 rounded">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="w-4/12">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6">Brand : {brandName}</h3>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6">type : {type}</h3>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6">Price : ${price}</h3>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>

                    <button onClick={handleAddToCart} className="btn btn-primary w-full mt-10">Add To Cart</button>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-6 mb-16">
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default ViewDetail;