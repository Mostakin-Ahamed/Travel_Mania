import useTourTypes from "../../../Hooks/useTourTypes";
import TourCard from "../../../Components/TourCard";
import { Helmet } from "react-helmet-async";


const AirRides = () => {
    const [tour]= useTourTypes()
    const airRides = tour.filter(tour => tour.tour_type ==='Air Rides')

    return (
        <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
            <Helmet><title>Air Rides</title></Helmet>
            {
                airRides.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
    );
};

export default AirRides;