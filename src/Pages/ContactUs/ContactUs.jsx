import { useRef } from "react";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";


const ContactUs = () => {
    
    const formRef = useRef()
    const handleMessage = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password');
        const message = form.get('message')
        const userMessage ={email, password,message}
        console.log(userMessage);
        formRef.current?.reset()
        Swal.fire({
            title: 'Success!',
            text: 'Your Message Has Been Sent!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        

        // signIn(email, password)
        // .then(result =>{
        //     console.log(result);
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Logged in successfully!',
        //         icon: 'success',
        //         confirmButtonText: 'Cool'
        //       })
        //     navigate(location?.state? location.state : '/' )
        // })
        // .catch(error=>{
        //     // toast.error(error.message);
        //     console.log(error.message);
        //     Swal.fire({
        //         title: 'Error!',
        //         text: error.message,
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //       })
        // })
    }


    return (
        <div>
            <Helmet><title>Contact Us</title></Helmet>
            <div className="mb-48">
                <div>
                    <h2 className="text-3xl my-10 text-center">Contact Us!</h2>
                    <form ref={formRef} onSubmit={handleMessage}  className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="password" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <input type="textarea" name="password" placeholder="Your Message" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;