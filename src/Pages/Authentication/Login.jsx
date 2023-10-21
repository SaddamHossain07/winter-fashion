import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                console.log(result.user.email)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user.email)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="py-16">
            <div className="w-full mx-auto max-w-sm p-4 border bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400  border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-white text-center">Please Login!</h5>
                <button onClick={handleGoogleLogin} className="border-2 border-purple-600 bg-slate-100 rounded-lg py-3 px-4 mt-6 flex gap-4 justify-center font-semibold w-full">
                    <span><img className="h-6" src="https://i.ibb.co/1RHYhnL/download.png" alt="" /></span>
                    Continue with Google
                </button>

                <h3 className="text-center py-6">-------------- or --------------</h3>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered yet? <Link to='/register'><button className="text-blue-700 hover:underline dark:text-blue-500">Register</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;