import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [registerError, setRegisterError] = useState('')


    const { createUser } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault()
        const form = e.target
        const displayName = form.displayName.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        const newUser = { displayName, photoURL, email }
        console.log(newUser)
        setRegisterError('')

        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setRegisterError('Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 6 characters long.');
            return;
        }

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
            .catch(error => {
                setRegisterError(error.message)
            })
    }
    return (
        <div className="py-16">
            <div className="w-full mx-auto max-w-sm p-4 border bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400  border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-white text-center">Please Register!</h5>

                <form className="space-y-4 pt-6" onSubmit={handleRegistration} >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" name="displayName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Profile Picture</label>
                        <input type="text" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image URL http://example.com/img-1" />
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

                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
            </div>
        </div>
    );
};

export default Register;