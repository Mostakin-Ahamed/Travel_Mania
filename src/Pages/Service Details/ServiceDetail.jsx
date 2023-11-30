import { useLoaderData } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTourGuides from "../../Hooks/useTourGuides";


const ServiceDetail = () => {

    const tour = useLoaderData()

    const { user } = useContext(AuthContext)
    const [guides] = useTourGuides()
    const formRef=useRef();
    const { _id,image, description, price, duration_hours, service_name } = tour;

    const bookItem = e => {
        e.preventDefault();
        console.log(tour.image);
        const form =e.target;
        const email = user.email;
        const tourId = _id;
        console.log(tourId);
        const tourImage = image;
        console.log(tourImage);
        const tourDescription =description;
        const tourPrice =price;
        const tourDuration = duration_hours;
        const guideName = form.guideName.value;
        const tourDate = form.date.value;
        const bookedTour = {email, tourId, tourImage, tourDescription, tourPrice, tourDuration , guideName, tourDate};
        console.log(bookedTour);

        fetch('http://localhost:5000/bookTour', {
            
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTour)
    
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
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
        <div>
            <div className=" min-h-screen flex justify-center mb-10">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide><img className="w-full object-cover" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full object-cover" src={image} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div >
                <div className="flex-col justify-center">
                    <h1 className="text-3xl font-bold">Name: {description}</h1>
                    <h1 className="text-2xl font-bold">Price: ${price}/hour</h1>
                    <p className="py-6 text-lg">Total Duration:  {duration_hours}</p>
                </div>
                {/* <button onClick={() => bookItem(tour)} className="btn btn-primary">Book Now!</button> */}
                {/* modal */}
                <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_5').showModal()}>Book This Service</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="py-4">
                            <h3 className="font-bold text-lg text-center">{service_name}</h3>
                            <form onSubmit={bookItem} className="w-1/2 lg:w-10/12 md:3/4 mx-auto">

                                <figure><img className="object-cover h-full" src={image} alt="Shoes" /></figure>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name="productName" placeholder="Product Name" defaultValue={service_name} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="productName"
                                        defaultValue={user.displayName}
                                        placeholder="Service Provider Email"
                                        readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="text" name="productName"
                                        defaultValue={user.email}
                                        readOnly
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Booking Date</span>
                                    </label>
                                    <input type="date" name="date"
                                        className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Guide</span>
                                    </label>
                                    <select name="guideName" className="select select-bordered w-full form-control" required>
                                        <option disabled selected>Select Guide</option>
                                        {
                                            guides.map(guide=><option key={guide._id}>{guide.name}</option>)
                                        }
                                        
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price"
                                        defaultValue={price} readOnly
                                        className="input input-bordered" />
                                </div>
                                <button className=" w-10/12 mt-4 btn font-medium ">Book This Item </button>
                            </form>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">

                                {/* if there is a button in form, it will close the modal */}

                                <div className="flex justify-center ">
                                    <button className="btn ">Close</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ServiceDetail;