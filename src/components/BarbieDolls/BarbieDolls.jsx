import { useEffect, useState } from "react";
import BarbieCard from "./BarbieCard";


const BarbieDolls = () => {
    const [barbieCard, setBarbieCard] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/servicesBarbie')
            .then(res => res.json())
            .then(data => setBarbieCard(data))
    }, [])
    return (
        <div>
            <div className=" mt-12 grid grid-cols-1 lg:grid-cols-2 ">
                
                {
                    barbieCard.map(barbie=> <BarbieCard
                        key={barbie._id}
                        barbie={barbie}
                    ></BarbieCard>)
                }
            </div>
        </div>
    );
};

export default BarbieDolls;