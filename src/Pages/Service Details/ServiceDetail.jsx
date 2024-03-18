import { useLoaderData } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTourGuides from "../../Hooks/useTourGuides";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";


const ServiceDetail = () => {

    const tour = useLoaderData()

    const { user } = useContext(AuthContext)
    const [guides] = useTourGuides()
    const formRef = useRef();
    const { _id, image, description, price, duration_hours, service_name, tour_type } = tour;
    const axiosSecure = useAxiosSecure()

    const bookItem = e => {
        e.preventDefault();
        console.log(tour.image);
        const form = e.target;
        const email = user.email;
        const tourId = _id;
        console.log(tourId);
        const tourImage = image;
        console.log(tourImage);
        const tourDescription = description;
        const tourPrice = price;
        const tourDuration = duration_hours;
        const guideName = form.guideName.value;
        const tourDate = form.date.value;
        const tourName = service_name;
        const bookedTour = { email, tourId, tourImage, tourDescription, tourPrice, tourDuration, tourName, guideName, tourDate };
        console.log(bookedTour);

        axiosSecure.post('/bookTour', bookedTour)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
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
        <div className="w-9/12 mx-auto">
            <Helmet><title>{service_name}</title></Helmet>
            <div className="flex justify-evenly ">
                <div className="w-3/4 mx-auto  mt-14 mb-10">
                    <img className="w-full min-h-[600px] object-cover" src={image} alt="" />
                </div>
                <div className="flex w-full mx-auto mb-10 items-center ">
                    <div className="w-3/4 mx-auto flex-col justify-center text-left">
                        <h3 className="flex gap-3 mb-3"> <CiLocationOn />{tour_type} </h3>
                        <h2 className="text-2xl font-semibold mb-3"> {service_name}</h2>
                        <h2 className="text-xl mb-3">{description}</h2>
                        <div className="flex w-9/12 justify-between">
                            <div>
                                <h2 className="text-lg text-gray-700">From <span className="text-xl font-semibold text-orange-600"> $: {price}</span> </h2>
                            </div>
                            <div className="">
                                <h2 className="card-title"><FaRegClock></FaRegClock> {duration_hours} Hours</h2>
                            </div>
                        </div>
                        <div className="w-full gap-4 mb-5 mt-5">
                            <hr className='border border-gray-400' />
                        </div>
                       
                        <div className="flex justify-center">
                            <button className="btn btn-outline bg-blue-500 text-white w-1/2 mx-auto" onClick={() => document.getElementById('my_modal_5').showModal()}>Book This Tour</button>
                        </div>
                    </div>

                    <dialog id="my_modal_5" className="modal w-full modal-bottom sm:modal-middle">
                        <div className="modal-box w-8/12">
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
                                                guides.map(guide => <option key={guide._id}>{guide.name}</option>)
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
                                    <button className=" w-full mx-auto mt-4 btn btn-outline font-bold ">Book This Item </button>
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
        </div>
    );
};

export default ServiceDetail;