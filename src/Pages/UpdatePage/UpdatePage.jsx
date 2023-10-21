import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdatePage = () => {
    const product = useLoaderData()
    const { _id, name, brandName, type, price, rating, description, image } = product



    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const image = form.image.value
        const updatedProduct = { name, brandName, type, price, rating, description, image }
        console.log(updatedProduct)
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Product Updated Successfully!',
                        'success'
                    );
                    form.reset()
                }
            })

    }


    return (
        <div>
            <div>
                <img src="https://i.ibb.co/LvFpQ0X/banner-2.png" alt="" />
            </div>
            <h2 className="text-3xl font-bold mt-16 text-center">Update : {name}</h2>
            <form onSubmit={handleUpdate} className="w-10/12 mx-auto">
                <div className="space-y-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="block text-sm font-medium leading-6 text-gray-900">Product Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="photo url http://example.com/img-1.png" className="input input-bordered w-full" />
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Product Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Brand Name</span>
                            </label>
                            <select id="country" name="brandName" defaultValue={brandName} className="input input-bordered w-full">
                                <option>nike</option>
                                <option>adidas</option>
                                <option>gucci</option>
                                <option>zara</option>
                                <option>h&m</option>
                                <option>levies</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Type</span>
                            </label>
                            <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Rating</span>
                            </label>
                            <select id="country" name="rating" defaultValue={rating} className="input input-bordered w-full">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        <div className="mt-2">
                            <textarea name="description" defaultValue={description} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Product</button>
                </div>
            </form>

        </div>
    );
};

export default UpdatePage;