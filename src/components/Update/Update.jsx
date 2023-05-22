import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {
    const updateData = useLoaderData()
    console.log(updateData)
    const navigate = useNavigate()
    const { name, seller_name, email, category, Price, Rating, details, quantity, photo } = updateData;

    const handleAddUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const category = form.category.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        
        const bookings = {
            name,
            seller_name,
            email, 
            category,
            Price, 
            Rating,
            details,
            quantity,
            photo

        }
        console.log(bookings)
        fetch(`http://localhost:5000/bookings/${updateData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            
                if (data.modifiedCount > 0) {                   
                    Swal.fire({
                        title: 'Success!',
                        text: 'update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate('/myToy')
            })
    }
    return (
        <div>
            <div className="p-24">
                <h1 className="text-3xl font-extrabold ">Add A Toy</h1>
                <form onSubmit={handleAddUpdate}>
                    <div className="md:flex gap-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">seller name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="seller_name" defaultValue={seller_name} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="email" defaultValue={email} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Category</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="category" defaultValue={category} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="Price" defaultValue={Price} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="Rating" defaultValue={Rating} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">quantity</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Details</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-8">
                        <div className="form-control md:w-full mb-8">
                            <label className="label">
                                <span className="label-text text-[#1B1A1A] font-medium">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <input type="submit" value="Add Dolls" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default Update;