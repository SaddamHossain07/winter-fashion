
const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const image = form.image.value
        const newProduct = { name, brandName, type, price, rating, description, image }
        console.log(newProduct)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/LvFpQ0X/banner-2.png" alt="" />
            </div>
            <h2 className="text-3xl font-bold mt-16 text-center">Add A Product</h2>
            <form onSubmit={handleAddProduct} className="w-10/12 mx-auto">
                <div className="space-y-6">
                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="image" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Brand Name</span>
                            </label>
                            <select id="country" name="brandName" className="input input-bordered w-full">
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
                            <select id="country" name="type" className="input input-bordered w-full">
                                <option>nike</option>
                                <option>adidas</option>
                                <option>gucci</option>
                                <option>zara</option>
                                <option>h&m</option>
                                <option>levies</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Rating</span>
                            </label>
                            <select id="country" name="rating" className="input input-bordered w-full">
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
                            <textarea name="description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
                </div>
            </form>

        </div>

    );
};

export default AddProduct;