import { useEffect, useContext, useState } from "react";
import Swal from 'sweetalert2'

import { AuthContext } from "../Providers/AuthProviders";
import ShowToy from "./ShowMyToy/ShowToy";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
    useTitle('MyToy')
    const { user } = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([])
    const url = `https://dolls-server-assignment11.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyBooking(data)
            })
    }, [])
    const handleDelete = id => {
        console.log(id)
        fetch(`https://dolls-server-assignment11.vercel.app/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = myBooking.filter(booking => booking._id !== id);
                    setMyBooking(remaining)
                }

            })

    }
    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
               
                <thead>
                    <tr>
                       
                        <th>image</th>
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
                        myBooking.map(show => <ShowToy
                            key={show._id}
                            show={show}
                            handleDelete={handleDelete}


                        ></ShowToy>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToy;