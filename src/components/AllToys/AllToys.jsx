import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')

  const [allToys, setAllToys] = useState([])

  useEffect(() => {
    fetch('https://dolls-server-assignment11.vercel.app/bookings')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
        console.log(data)
      })
  }, [])
  return (
    <div>
      

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
            </tr>
          </thead>
          <tbody>
            
            {
              allToys.map(allToy => <AllToysRow
                key={allToy._id}
                allToy={allToy}
              ></AllToysRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;