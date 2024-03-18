
import { Helmet } from 'react-helmet-async';
import TourCard from '../../../Components/TourCard';
import useTourTypes from '../../../Hooks/useTourTypes';

const Walking = () => {
    const [tour]= useTourTypes()
    const walking = tour.filter(tour => tour.tour_type ==='Walking')
    

    return (
        <div className="grid grid-cols-3 gap-10 justify-evenly mb-8  pb-10 mt-10 h-full w-9/12 mx-auto">
            <Helmet><title>Walking</title></Helmet>
            {
                walking.map(item=> <TourCard key={item.service_id} item={item}></TourCard>)
            }
        </div>
    );
};

export default Walking;