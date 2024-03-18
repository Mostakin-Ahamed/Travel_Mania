import { Helmet } from "react-helmet-async";
import TourCard from "../../../Components/TourCard";
import useTourTypes from "../../../Hooks/useTourTypes";

const Wildlife = () => {
    const [tour] = useTourTypes()
    const wildlife = tour.filter(tour => tour.tour_type === 'Wildlife')


    return (
        <div>
            <Helmet><title>Wild Life</title></Helmet>
            <div className="font-bold text-5xl text-center mb-16 mt-10">
                <p><span className="text-blue-500"> Wild Life</span> Tours</p>
            </div>
            <div className="grid grid-cols-3 gap-10 justify-evenly mb-9 pb-10 mt-10 h-full w-9/12 mx-auto">

            
            {
                wildlife.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
        </div>
        
    );
};

export default Wildlife;