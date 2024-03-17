import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



// eslint-disable-next-line react/prop-types
const TourCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const formRef = useRef()

    const {
        // eslint-disable-next-line react/prop-types
        _id, service_name, description, price, duration_hours, tour_type, image } = item;


    const addToWishlist = e => {
        e.preventDefault();
        // const wishlist = { userEmail, item }

        const email = user.email;
        const tourId = _id;
        const tourImage = image;
        const tourDescription = description;
        const tourPrice = price;
        const tourDuration = duration_hours;
        const tourName = service_name;

        const wishList = { email, tourId, tourImage, tourDescription, tourName, tourPrice, tourDuration };
        console.log(wishList);

        fetch('https://travel-mania-server.vercel.app/wishList', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tour added to WishList!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    formRef.current?.reset();
                }
            })


    }

    return (
        <div className="max-h-[650px] pl-5 md:pl-12 lg:pl-10 mb-10">
            <div className="card w-96 h-full bg-inherit rounded-none  ">
                <figure className="">
                    <img src={image} alt="Image" className="  object-contain h-[250px]" />
                </figure>
                <div className="card-body items-start text-center">
                    <h3 className="flex gap-3"> <CiLocationOn />{tour_type} </h3>
                    <h2 className="text-2xl"> {service_name}</h2>
                    <div className="flex w-9/12 justify-between">
                        <div className="">
                            <h2 className="text-lg text-gray-700">From <span className="text-xl font-semibold text-orange-600"> $: {price}</span> </h2>
                        </div>
                        <div className="">
                            <h2 className="card-title"><FaRegClock></FaRegClock> {duration_hours}</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between w-9/12">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary border-none bg-blue-600">Show Details!</button></Link>
                        <button onClick={addToWishlist} className="btn btn-ghost "><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;