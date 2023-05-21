import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {

  const [allToys, setAllToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/bookings')
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
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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