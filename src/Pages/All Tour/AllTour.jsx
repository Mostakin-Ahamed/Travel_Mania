import { Helmet } from "react-helmet-async";
import TourCard from "../../Components/TourCard";
import useTourTypes from "../../Hooks/useTourTypes";

const AllTour = () => {
    const [tour]= useTourTypes()
    return (
        <div>
            <Helmet><title>All Tours</title></Helmet>
            <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
            {
                tour.map(item=> <TourCard key={item._id} item={item}></TourCard>)
            }
        </div>
        </div>
    );
};

export default AllTour;