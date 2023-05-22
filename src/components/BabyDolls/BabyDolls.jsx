import { useEffect, useState } from "react";
import BabyCard from "./BabyCard";

const BabyDolls = () => {
    const [babyDolls, setBabyDolls] = useState([])


    useEffect(() => {
        fetch('https://dolls-server-assignment11.vercel.app/servicesdoll')
            .then(res => res.json())
            .then(data => setBabyDolls(data))
    }, [])
    return (
        <div>
            <div className=" mt-12 grid grid-cols-1 lg:grid-cols-2">
                
                {
                    babyDolls.map(babyDoll=><BabyCard 
                        key={babyDoll._id}
                        babyDoll={babyDoll}
                        ></BabyCard>)
                }
            </div>
        </div>
    );
};

export default BabyDolls;