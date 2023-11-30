import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const Login = () => {

    const {signIn , googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password');

        signIn(email, password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state? location.state : '/' )
        })
        .catch(error=>{
            // toast.error(error.message);
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    const handleGoogleLogIn= e=>{
        e.preventDefault();
        googleSignIn();
        // toast.success("Logged In Successfully")
        console.log('Logged in successfully');
        navigate(location?.state? location.state : '/' )

    }

    return (
        <div className="mb-48">
            <Helmet><title>Login</title></Helmet>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login!</h2>
                <form onSubmit={handleLogin} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="flex justify-center w-full mt-6">
                    <button onClick={handleGoogleLogIn} className="btn btn-primary">Login with google <img className="h-[25px]" src="/google.svg" alt="" /> </button>
                </div>
                <p className="text-center mt-5">Do not have an account? <Link className="text-blue-600" to="/register">Register Here! </Link></p>
            </div>
        </div>
    );
};

export default Login;