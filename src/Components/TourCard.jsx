import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

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
        
        const wishList = { email, tourId, tourImage, tourDescription,tourName , tourPrice, tourDuration};
        console.log(wishList);

        fetch('http://localhost:5000/wishList', {

                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(wishList)

            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
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
        <div className="max-h-[650px] pl-32 mb-10">
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className=" px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl object-fill h-[200px]" />

                </figure>
                <div className="card-body items-center text-center">
                    <h2><button onClick={addToWishlist} className="btn-lg text-red-500"><FaHeart /></button></h2>
                    <h2 className="card-title">Service Name: {service_name}</h2>
                    <h2 className="card-title">Service Type: {tour_type}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                    <h2 className="card-title">Duration Hours: {duration_hours}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Show Details!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;