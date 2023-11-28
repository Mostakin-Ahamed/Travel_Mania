import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="mb-8">
            <div className='mt-16 '>
                <div className=" text-center mb-10" id='header-text'>
                    <p>About Us!</p>
                </div>
                <div className='lg:flex pl-44 w-10/12 mx-auto  justify-evenly '>
                    <div className="w-1/2 mx-auto">
                        <div className='mt-4 pt-5'>
                            <div className='w-3/4 mt-8 text-center'>
                                <p className="text-2xl font-semibold">Giving you the best and memorable tour with your loved ones ! Making great memories throughout the whole tour ! Because your satisfaction is everything to us ! <br />See our packages down bellow !</p>
                            </div>
                            <div>
                                <div className="pl-16">
                                    <Link to={'/'}><button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>See Our Packages!</button></Link>
                                    <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div >
                                    <img src="/Union.svg" className='static ml-[315px] lg:ml-96 -mt-7 mb-7' alt="" />
                                </div>
                            </div>
                            <div className=''>
                                <img src="/Icon.svg" className='mt-20 hidden lg:block' alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='pr-10 pl-10 '>
                        
                    </div> */}
                    <div className='flex lg:gap-5 gap-3'>
                            <div><img className='h-[480px] w-[450px] object-cover mr-5 mt-6' src="/banner.jpg" alt="" /></div>
                            <div><img className='lg:h-[480px] lg:w-[450px] object-cover mr-5 m5-6' src="/aboutUs.jpg" alt="" /></div>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;