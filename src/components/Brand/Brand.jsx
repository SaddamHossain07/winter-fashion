
const Brand = ({ brand }) => {
    const { brandName, brandImage } = brand
    return (
        <div className="card shadow-xl image-full max-h-72">
            <img className="h-56 w-full" src={brandImage} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title font-bold">{brandName}</h2>
                <button className="btn btn-primary mt-36">View Product</button>
            </div>
        </div>
    );
};

export default Brand;