import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../../Provider/AuthProvider";


const MyBookings = () => {
    const { user } = useContext(AuthContext)

    const [services, setServices] = useState([])
    const url = `https://travel-mania-server.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url])
    console.log(services);

    const totalPrice = services.reduce((total, item)=>total +item.tourPrice,0)


    return (
        <div className="w-10/12 mx-auto mt-20">
            <div className="overflow-x-auto">

                <div className="flex justify-around">
                    <h2 className="text-6xl mb-8">Total Tours: {services.length}</h2>
                    <h2 className="text-6xl mb-8">Total Cost: ${totalPrice}</h2>

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Tour Name</th>
                            <th>Tour Guide Name</th>
                            <th>Tour Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => 
                                <tr key={service._id}>
                                    <th>
                                        {
                                            index+1
                                        }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={service.tourImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <div className="font-bold">{service.tourName}</div> */}
                                                <div className="text-sm opacity-50">{service.tourName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {service.guideName}
                                        <br />
                                        <span className=" badge-sm">${service.tourPrice} Per Hour</span>
                                    </td>
                                    <td>{service.tourDate}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyBookings;