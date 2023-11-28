
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import useTourTypes from '../../../../Hooks/useTourTypes';
import { Link } from 'react-router-dom';

const TourType = () => {

    // const [tour] = useTourTypes();
    // const wildlife = tour.filter(tour => tour.tour_type ==='Wildlife')
    // const walking = tour.filter(tour => tour.tour_type ==='Walking')
    // const airRides = tour.filter(tour => tour.tour_type ==='Air Rides')
    // const sports = tour.filter(tour => tour.tour_type ==='Sports')
    // const hiking = tour.filter(tour => tour.tour_type ==='Hiking')


    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-5xl font-extrabold text-slate-500 text-center'>Tour Types</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to={'/tours/wildlife'}><img className='w-full h-full object-cover' src="/wildlife.jpg" />
                    <h2 className='font-bold text-3xl text-white absolute -mt-16 ml-3'>Wildlife</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/tours/sports'}><img className='h-full object-cover' src="/sports.jpeg" />
                    <h2 className='font-bold text-3xl text-white absolute -mt-16 ml-3'>Sports</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/tours/hiking'}><img className='h-full object-cover' src="/hiking.jpg" />
                    <h2 className='font-bold text-3xl text-white absolute -mt-16 ml-3'>Hiking</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/tours/walking'}><img className='h-full object-cover' src="/walking.jpg" />
                    <h2 className='font-bold text-3xl text-white absolute -mt-16 ml-3'>Walking</h2></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/tours/airRides'}><img className='h-full object-cover' src="/air-rides.jpg" />
                    <h2 className='font-bold text-3xl text-white absolute -mt-16 ml-3'>Air Rides</h2></Link>
                </SwiperSlide>
                
            </Swiper>
            <hr className='border-dashed border-gray-400' />
        </div>
    );
};

export default TourType;