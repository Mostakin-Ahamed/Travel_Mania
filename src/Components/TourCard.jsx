import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TourCard = ({item}) => {

    const {
        // eslint-disable-next-line react/prop-types
        _id,service_name,description,price,duration_hours,tour_type, image} = item;

    return (
        <div className="max-h-[650px] pl-32 mb-10">
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
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