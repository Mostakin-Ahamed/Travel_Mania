// import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='w-full mb-10'>
            {/* <div className='mt-16 pl-10 lg:ml-64'>
                
                <div className='lg:flex justify-between '>
                    <div>
                        <div className='mt-4'>
                            
                            <div className='w-[358px] mt-8 text-justify'>
                                <p>Giving you the best and memorable tour with your loved ones ! Making great memories throughout the whole tour ! Because your satisfaction is everything to us !
                                    See our packages down bellow !</p>
                            </div>
                            <div>
                                <div>
                                    <Link to={'/allTours'}><button className='w-[257px] absolute h-[55px] bg-blue-500 mt-9 font-semibold text-base text-white spacing-5'>See Our Packages</button></Link>
                                    <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div >
                                    <img src="/Union.svg" className='static ml-[315px] lg:ml-96 -mt-7 mb-7' alt="" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='pr-10 lg:mr-60'>
                        <img className='lg:h-[480px] lg:w-[718px] object-cover mb-20' src="/banner.jpg" alt="" />
                        <img className='absolute ml-44 -mt-64 lg:ml-80 lg:-mt-[350px]' src="/Play video.svg" alt="" />
                    </div>
                </div>

            </div> */}
            <img  src="https://i.ibb.co/K6KwWMv/6019681.jpg" alt="" />

        </div>
    );
};

export default Banner;