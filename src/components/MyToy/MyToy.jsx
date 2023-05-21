import { useEffect, useContext, useState } from "react";

import { AuthContext } from "../Providers/AuthProviders";
import ShowToy from "./ShowMyToy/ShowToy";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyBooking(data)
            })
    }, [])
    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>img</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Button</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myBooking.map(show => <ShowToy show={show} key={show._id}></ShowToy>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToy;