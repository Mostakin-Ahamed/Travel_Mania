// import { useContext, useEffect, useState } from "react";

// import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import { Helmet } from "react-helmet-async";


const MyWishlist = () => {
    const [carts, refetch] = useCart()

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishList/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });

    }




    return (
        <div className="w-10/12 mx-auto mt-20">
            <Helmet><title>My Wishlist</title></Helmet>
            <div className="overflow-x-auto">


                <h2 className="text-6xl mb-8 text-center">My Wishlist!</h2>



                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Tour Name</th>
                            <th>Tour Duration</th>
                            <th>Tour Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((service, index) =>
                                <tr key={service._id}>
                                    <th>
                                        {index + 1}
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
                                        <span className="text-center badge-sm">{service.tourDuration} Hours</span>
                                    </td>
                                    <td>{service.tourPrice} Per Hour</td>
                                    <th>
                                        <button onClick={() => handleDelete(service._id)} className="btn btn-ghost btn-lg text-red-400"><FaTrash></FaTrash></button>
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

export default MyWishlist;