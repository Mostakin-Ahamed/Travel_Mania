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
        <div className='mt-10'>
            <h1 className='text-5xl font-extrabold text-slate-500 text-center'>User Reviews</h1>
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
    );
};

export default Story;