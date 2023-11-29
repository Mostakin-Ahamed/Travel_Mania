import TourCard from "../../Components/TourCard";
import useTourTypes from "../../Hooks/useTourTypes";

const AllTour = () => {
    const [tour]= useTourTypes()
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
            {
                tour.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
        </div>
    );
};

export default AllTour;