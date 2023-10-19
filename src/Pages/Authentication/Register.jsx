import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {


    const { createUser } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const profilePicture = form.profilePicture.value
        const email = form.email.value
        const password = form.password.value
        const newUser = { name, profilePicture, email }
        console.log(newUser)
        createUser(email, password)
            .then(result => {
                alert('user created successfully', result.user)
                fetch('https://winter-fashion-server-ltun96orj-saddam-hossains-projects.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user inserted into db', data)
                    })
            })
            .then(error => {
                console.error(error)
            })
    }
    return (
        <div className="py-16">
            <div className="w-full mx-auto max-w-sm p-4 border bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400  border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-white text-center">Please Register!</h5>

                <form className="space-y-4 pt-6" onSubmit={handleRegistration} >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Profile Picture</label>
                        <input type="text" name="profilePicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image URL http://example.com/img-1" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div className="pb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
                    <div className="text-sm font-medium text-gray-500">
                        Already have an account? <Link to='/login'><button className="text-blue-700 hover:underline dark:text-blue-500">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;