import TourCard from "../../../Components/TourCard";
import useTourTypes from "../../../Hooks/useTourTypes";

const Wildlife = () => {
    const [tour]= useTourTypes()
    const wildlife = tour.filter(tour => tour.tour_type ==='Wildlife')
    

    return (
        <div className="grid grid-cols-3 gap-10 justify-evenly mb-9 pb-10 mt-10 h-full ">
            {
                wildlife.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
    );
};

export default Wildlife;