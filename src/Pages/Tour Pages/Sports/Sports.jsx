import { Helmet } from "react-helmet-async";
import TourCard from "../../../Components/TourCard";
import useTourTypes from "../../../Hooks/useTourTypes";


const Sports = () => {
    const [tour] = useTourTypes()
    const sports = tour.filter(tour => tour.tour_type === 'Sports')


    return (
        <div>
            <Helmet><title>Sports</title></Helmet>
                <div className="font-bold text-5xl text-center mb-16 mt-10">
                    <p><span className="text-blue-500"> Sports</span> Tour</p>
                </div>
            <div className="grid grid-cols-3 gap-10 mb-10 justify-evenly pb-10 mt-10 h-full w-9/12 mx-auto">
                
                {
                    sports.map(item => <TourCard key={item.service_id} item={item}></TourCard>)
                }
            </div>
        </div>
    );
};

export default Sports;