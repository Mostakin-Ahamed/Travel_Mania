import { Helmet } from "react-helmet-async";
import Banner from "./Components/Banner/Banner";
import TourismAndTravel from "./Components/Tabs/TourismAndTravel";
import Story from "./Components/TouristStory/Story";
import TourType from "./Components/ToutType/TourType";
import Offer from "./Components/Offer/Offer";
import Destinations from "./Components/Destinations/Destinations";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <Offer></Offer>
            <Destinations></Destinations>
            <TourType></TourType>
            <Story></Story>
        </div>
    );
};

export default Home;