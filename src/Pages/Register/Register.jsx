import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import 'react-toastify/dist/ReactToastify.css';
// import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {


    const { createUser, googleRegister } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photoURL');
        const role = 'user'

        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be 6 characters or longer!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be 6 characters or longer!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                const userInfo = { email, name, photo , role}
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log(result.user);
                            Swal.fire({
                                title: 'Success!',
                                text: 'User created successfully!',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            updateProfile(result.user, {
                                displayName: name,
                                photoURL: photo
                            })
                                .then(() => console.log("profile updated"))
                                .catch()


                            navigate(location?.state ? location.state : '/')
                        }
                    })

            })

            .catch(error => {

                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    const handleGoogleRegister = e => {
        e.preventDefault();
        googleRegister();
        navigate(location?.state ? location.state : '/')

    }

    return (
        <div className="mb-32">
            <div >
                <h2 className="text-3xl my-10 text-center">Please Register!</h2>
                <form onSubmit={handleRegister} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register with email</button>
                    </div>
                </form>
                <div className="flex justify-center w-full mt-6">
                    <button onClick={handleGoogleRegister} className="btn btn-primary">Register with google <img className="h-[25px]" src="/google.svg" alt="" /></button>
                </div>
                <p className="text-center mt-5">Already have an account? <Link className="text-blue-600" to="/login">Login Here! </Link></p>
            </div>
        </div>
    );
};

export default Register;