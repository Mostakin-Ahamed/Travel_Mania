import { Slide } from "react-awesome-reveal";


const Offer = () => {
    return (
        <>
            <div className="font-bold text-5xl text-center mb-16 mt-8">
                <p>Special <span className="text-blue-500"> Offers</span> </p>
            </div>
            <div className="lg:flex w-full justify-center  mt-14  gap-52 my-14">
                <Slide direction="left">
                    <img src="https://i.ibb.co/pZ6krGt/offer2.png" alt="7" border="0" />

                </Slide>
                <Slide direction="right">
                    <img src="https://i.ibb.co/4VJ3qBG/offer1.png" alt="6" border="0" />
                </Slide>

            </div>
        </>

    );
};

export default Offer;