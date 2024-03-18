import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";



const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }


    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can change it anytime you want!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} role has been updated to Admin!`,
                                icon: "success",
                                timer:1500
                            });
                        }
                    })
            }
        });

    }
    const handleMakeGuide = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can change it anytime you want",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/guide/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} role has been updated to Guide!`,
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }
    const handleMakeUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can change it anytime you want!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/user/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} role has been updated to User!`,
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }

    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
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
        <div>
            <Helmet><title>Manage User</title></Helmet>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>

            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>User Name & Photo</th>
                        <th>User Email</th>
                        <th>User Role</th>
                        <th>Update Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <th>
                                    {
                                        index + 1
                                    }
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className="font-bold">{service.tourName}</div> */}
                                            <div className="text-sm opacity-50">{user.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{user.email}</td>
                                <td>
                                    {user.role}
                                    <br />

                                </td>
                                <td>
                                    <button onClick={() => handleMakeUser(user)}className="btn btn-ghost btn-md text-red-400"><FaUser />
                                    </button>
                                    <button onClick={() => handleMakeGuide(user)} className="btn btn-ghost btn-md text-red-400"><FaUserCheck />
                                    </button>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-md text-red-400"><MdOutlineAdminPanelSettings />
                                    </button>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-lg text-red-400"><FaTrash></FaTrash></button>
                                </th>
                            </tr>
                        )
                    }


                </tbody>



            </table>
        </div>
    );
};

export default ManageUsers;