import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {

  const bookings = useLoaderData()

  useTitle('All Toys')

  const [allToys, setAllToys] = useState(bookings)

  const handleAddSearch =event=>{
    event.preventDefault()
    const form = event.target;
    const name = form.search.value
    const search = bookings.filter(allTo=> allTo.category == name)
    allToys(search)
    
  }

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

      <div>
      <form onSubmit={handleAddSearch}>
        <div className="form-control">
          <div className="input-group">
            <input type="text" name="name" placeholder="Search…" className="input input-bordered" />
            <button type="submit" className="btn btn-square"> search
            </button>
          </div>
        </div>
      </form>
      </div>


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