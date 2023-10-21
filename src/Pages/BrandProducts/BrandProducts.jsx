import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
    const brand = useLoaderData()
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])






    return (
        <div>
            {
                brand.map(product => <p key={product._id}>{product.name} : {product.brandName}</p>)
            }
        </div>
    );
};

export default BrandProducts;