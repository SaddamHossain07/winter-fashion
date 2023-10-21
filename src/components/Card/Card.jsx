import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const { _id, name, brandName, type, price, rating, description, image } = product

    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(
            <svg
                key={i}
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <img className="w-full rounded-t-xl h-52" src={image} alt={`${name}`} />
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{brandName}</div>
                </h2>
                <div className="flex my-4">
                    {stars} <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                </div>
                <p className="text-xl font-semibold">{type}</p>
                <p className="text-xl font-semibold mt-0 pt-0">Price : ${price}</p>

                <div className="card-actions justify-end">
                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-sm btn-info">View Detail</button>
                    </Link>
                    <Link to={`/products/update/${_id}`}>
                        <button className="btn btn-sm btn-info">Update</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Card;