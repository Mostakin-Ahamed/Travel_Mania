import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";



const MyProfile = () => {

    const {user}= useContext(AuthContext)
    return (
        <div>
            
            <div className="hero min-h-full pt-32">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={guide.photo} className="max-w-sm object-cover avatar shadow-2xl mr-8" /> */}
                    <div className="avatar pr-48">
                        <div className="w-96 rounded-md shadow-md ">
                            <img  src={user.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Name: {user.displayName}</h1>
                        <h1 className="text-2xl font-bold">Email: {user.email}</h1>
                        <h1 className="text-xl font-bold">Phone: {user.uid}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;