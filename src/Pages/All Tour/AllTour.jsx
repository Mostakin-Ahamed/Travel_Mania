import { Helmet } from "react-helmet-async";
import TourCard from "../../Components/TourCard";
import useTourTypes from "../../Hooks/useTourTypes";
import { useState } from "react";

const AllTour = () => {
    const [tour] = useTourTypes()

    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState([])

    const numberOfPages = Math.ceil(tour.length / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()]
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val)
        setCurrentPage(0);
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;

    return (
        <div className="w-9/12 mx-auto">
            <Helmet><title>All Tours</title></Helmet>
            <div className="font-bold text-5xl text-center mb-16 ">
                <p>All of Our <span className="text-blue-500"> Packages</span> </p>
            </div>
            <div className="grid grid-cols-3 gap-10 justify-evenly pb-10 mt-10 h-full ">
                {
                    tour.slice(startIndex, endIndex).map(item => <TourCard key={item._id} item={item}></TourCard>)
                }
            </div>
            <div className="pagination flex justify-center mb-5">
                {pages.map(page => (
                    <button key={page} className="btn" onClick={() => setCurrentPage(page)}>
                        {page + 1}
                    </button>
                ))}
                {/* <div className="ml-10 mb-10">
                    <p>Items per page</p>
                    <select className="ml-5 border border-black rounded-lg" value={itemsPerPage} onChange={handleItemsPerPage}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div> */}
            </div>
        </div>
    );
};

export default AllTour;