import { Helmet } from "react-helmet-async";
import TourCard from "../../../Components/TourCard";
import useTourTypes from "../../../Hooks/useTourTypes";


const Sports = () => {
    const [tour]= useTourTypes()
    const sports = tour.filter(tour => tour.tour_type ==='Sports')
    

    return (
        <div className="grid grid-cols-3 gap-10 mb-10 justify-evenly pb-10 mt-10 h-full w-9/12 mx-auto">
            <Helmet><title>Sports</title></Helmet>
            {
                sports.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
    );
};

export default Sports;