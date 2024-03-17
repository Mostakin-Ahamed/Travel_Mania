
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './tourStyles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import useTourTypes from '../../../../Hooks/useTourTypes';
import { Link } from 'react-router-dom';

const TourType = () => {



    return (
        <div className='mt-10'>
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>Tour <span className="text-blue-500"> Types</span> </p>
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