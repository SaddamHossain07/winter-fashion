
const CreateBrand = () => {

    const handleAddBrand = e => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brandName.value.toLowerCase()
        const brandLogo = form.brandLogo.value
        const newBrand = { brandName, brandLogo }
        console.log(newBrand)

        fetch('https://b8a10-brandshop-server-side-saddam-hossain0743.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('brand created successfully')
            })
    }

    return (
        <div className="py-10">
            <div className="w-full mx-auto max-w-sm p-4 border bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400  border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-white text-center">Create A Brand</h5>

                <form className="space-y-4 mt-6" onSubmit={handleAddBrand}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Brand Name</label>
                        <input type="text" name="brandName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Brand Name" required />
                    </div>
                    <div className="pb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Brand Logo URL</label>
                        <input type="text" name="brandLogo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="http://example.com/brand/logo.png" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Brand</button>

                </form>
            </div>
        </div>
    );
};

export default CreateBrand;