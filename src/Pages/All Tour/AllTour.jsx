import { Helmet } from "react-helmet-async";
import TourCard from "../../Components/TourCard";
import useTourTypes from "../../Hooks/useTourTypes";

const AllTour = () => {
    const [tour] = useTourTypes()
    return (
        <div className="w-9/12 mx-auto">
            <Helmet><title>All Tours</title></Helmet>
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>All of Our <span className="text-blue-500"> Destinations</span> </p>
            </div>
            <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
                {
                    tour.map(item => <TourCard key={item._id} item={item}></TourCard>)
                }
            </div>
        </div>
    );
};

export default AllTour;