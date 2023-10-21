import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brandName, brandLogo } = brand
    const brandNameUpper = brandName
    return (
        <Link to={`/products/brand/${brandName}`}>
            <div className="card shadow-xl image-full">
                <img className="h-56 w-full" src={brandLogo} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{brandNameUpper}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;