import useTourTypes from "../../../Hooks/useTourTypes";
import TourCard from "../../../Components/TourCard";
import { Helmet } from "react-helmet-async";


const AirRides = () => {
    const [tour] = useTourTypes()
    const airRides = tour.filter(tour => tour.tour_type === 'Air Rides')

    return (
        <div>
            <Helmet><title>Air Rides</title></Helmet>
                <div className="font-bold text-5xl text-center mb-16 mt-10">
                    <p><span className="text-blue-500"> Air</span> Rides</p>
                </div>
            <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full w-9/12 mx-auto">
                
                {
                    airRides.map(item => <TourCard key={item.service_id} item={item}></TourCard>)
                }
            </div>
        </div>
    );
};

export default AirRides;