import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import { useEffect, useState } from 'react';
const Story = () => {

    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('/Rating.json')
        .then(res => res.json())
        .then(data =>setReviews(data))
    })


    return (
        <div>
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
                    reviews.map(review => <SwiperSlide key={review.user_id} >
                        <div>
                            <p className='mb-5'>{review.comment}</p>
                            <h2 className='text-3xl text-orange-400 mb-5'>By : {review.username}</h2>
                            <h2 className='text-2xl'>Rating: {review.rating}/5</h2>
                        </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Story;