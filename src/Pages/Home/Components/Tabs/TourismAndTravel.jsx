import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';

const TourismAndTravel = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className=' mx-auto lg:w-10/12  justify-center'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Package</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>
                <TabPanel>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-72">
                        <SwiperSlide><img src="../../../../../public/slide1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="../../../../../public/slide2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="../../../../../public/slide3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="../../../../../public/slide4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="../../../../../public/slide5.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="../../../../../public/slide6.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
            <hr className='border-dashed border-gray-400' />
        </div>
    );
};

export default TourismAndTravel;