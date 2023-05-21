import { useEffect, useState } from "react";
import GirlCard from "./GirlCard";


const GirlDolls = () => {

    const [girlDolls, setGirlDolls] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/servicesGirl')
            .then(res => res.json())
            .then(data => setGirlDolls(data))
    }, [])
    return (
        <div>
            <div className=" mt-12 grid grid-cols-1 lg:grid-cols-2 ">
                {
                    girlDolls.map(girlDoll=> <GirlCard 
                        key={girlDoll._id}
                        girlDoll={girlDoll}
                    ></GirlCard>)
                }
            </div>
        </div>
    );
};

export default GirlDolls;