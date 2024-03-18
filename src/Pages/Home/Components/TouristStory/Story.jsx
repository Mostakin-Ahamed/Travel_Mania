import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// import './css/styles.css';
import { useEffect, useState } from 'react';
const Story = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/Rating.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    })


    return (
        <div className='mt-10 w-9/12 mx-auto mb-10'>
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>User <span className="text-blue-500"> Reviews</span> </p>
            </div>
            <div className='flex justify-center'>
                <div className=''>
                    <img src="https://i.ibb.co/QkvBDrF/feedback.png" alt="" />
                </div>
                <div className='w-1/2 mx-auto'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            reviews.map(review => <SwiperSlide key={review._id} >
                                <div className='flex justify-center'>
                                    <div className='text-center'>
                                        <p className='mb-5 text-lg' >{review.comment}</p>
                                        <h2 className='text-3xl text-orange-400 mb-5'>By : {review.username}</h2>
                                        <h2 className='text-2xl'>Rating: {review.rating}/5</h2>
                                    </div>
                                </div></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Story;