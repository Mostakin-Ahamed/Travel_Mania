import { Helmet } from "react-helmet-async";
import TourCard from "../../../Components/TourCard";
import useTourTypes from "../../../Hooks/useTourTypes";


const Hiking = () => {
    const [tour]= useTourTypes()
    const hiking = tour.filter(tour => tour.tour_type ==='Hiking')
    

    return (
        <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
            <Helmet><title>Hiking</title></Helmet>
            {
                hiking.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
    );
};

export default Hiking;