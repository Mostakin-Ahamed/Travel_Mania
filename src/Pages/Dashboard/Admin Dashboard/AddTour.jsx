import { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'

const AddProducts = () => {
    const axiosSecure = useAxiosSecure()

    const formRef = useRef()
    const handleNewProduct = e => {
        
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const service_name = form.get('productName');
        const tour_type = form.get('brandName');
        const price1 = form.get('price');
        const price = parseInt(price1)
        const photo = form.get('imageURL');
        const description = form.get('details');
        const hours = form.get('hours')
        console.log(hours);
        const duration_hours = parseInt(hours)
        const newTour = { service_name, tour_type, price, photo, description, duration_hours }
        console.log(newTour);
        axiosSecure.post('/allTours',newTour)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added to cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                formRef.current?.reset();
            }
        })
        
        

    }

    return (
        <div className="mb-48">
            <h2 className="text-3xl my-10 text-center">Add a new tour!</h2>
            <form ref={formRef} onSubmit={handleNewProduct} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tour Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Tour name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tour Category</span>
                    </label>
                    <select name="brandName" className="select select-bordered w-full form-control" required>
                        <option disabled selected>Select Category</option>
                        <option>Walking</option>
                        <option>Hiking</option>
                        <option>Air Rides</option>
                        <option>Sports</option>
                        <option>Wildlife</option>
                    </select>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price Per Hour</span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Duration Hours</span>
                    </label>
                    <input type="number" name="hours" placeholder="Duration Hours" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Tour</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;