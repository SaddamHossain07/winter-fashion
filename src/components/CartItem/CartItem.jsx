
const CartItem = ({ item, handleDelete }) => {
    const { _id, name, image, user } = item



    return (
        <div className="card card-side bg-base-100 shadow-xl border-2 rounded-xl mt-16">
            <figure><img className="h-48 w-64" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;