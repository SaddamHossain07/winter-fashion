
const Brand = ({ brand }) => {
    const { brandName, brandLogo } = brand
    const brandNameUpper = brandName
    return (
        <div className="card shadow-xl image-full max-h-72">
            <img className="h-56 w-full" src={brandLogo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{brandNameUpper}</h2>
            </div>
        </div>
    );
};

export default Brand;