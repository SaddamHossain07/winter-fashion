
const SiteConfig = () => {

    const handleConfig = e => {
        e.preventDefault()
        const form = e.target
        const siteName = form.siteName.value
        const siteLogo = form.siteLogo.value
        const formData = { siteName, siteLogo }
        console.log(formData)

        fetch('http://localhost:5000/site', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('website info added successfully')
            })
    }

    return (
        <div className="py-10">
            <div className="w-full mx-auto max-w-sm p-4 border bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400  border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-white text-center">Website Configuration</h5>

                <form className="space-y-4 mt-6" onSubmit={handleConfig}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Website Name</label>
                        <input type="text" name="siteName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your website name" required />
                    </div>
                    <div className="pb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Logo URL</label>
                        <input type="text" name="siteLogo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="http://example.com/logo/logo.png" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Configure</button>

                </form>
            </div>
        </div>
    );
};

export default SiteConfig;