import { Helmet } from "react-helmet-async";
import Banner from "./Components/Banner/Banner";
import TourismAndTravel from "./Components/Tabs/TourismAndTravel";
import Story from "./Components/TouristStory/Story";
import TourType from "./Components/ToutType/TourType";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <TourType></TourType>
            <Story></Story>
        </div>
    );
};

export default Home;