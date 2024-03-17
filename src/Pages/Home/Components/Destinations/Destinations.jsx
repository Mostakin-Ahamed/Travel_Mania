import { Slide } from "react-awesome-reveal";


const Destinations = () => {
    return (
        <>
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>Top <span className="text-blue-500"> Destinations</span> </p>
            </div>
            <div className="w-full flex justify-center mt-14  gap-52 my-14">

                <Slide direction="left">
                    <img src="https://i.ibb.co/FwM5JPG/destinations.png" alt="7" border="0" />

                </Slide>


            </div>
        </>

    );
};

export default Destinations;