import { Slide } from "react-awesome-reveal";


const Special = () => {
    return (
        <>
            <div className="font-bold text-5xl text-center mb-16 mt-10">
                <p><span className="text-blue-500"> Subscribe</span> For More<span className="text-blue-500"> Offers</span></p>
            </div>
            <div className="lg:flex w-full justify-center  mt-14  gap-52 my-14">
                <Slide direction="left">
                    <img src="https://i.ibb.co/YZxLW9x/special-offer.png" alt="7" border="0" />

                </Slide>
            </div>
        </>

    );
};

export default Special;