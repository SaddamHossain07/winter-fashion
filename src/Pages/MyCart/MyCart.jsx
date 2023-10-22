import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import CartItem from "../../components/CartItem/CartItem";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
    const Items = useLoaderData()
    const [cartItems, setCartItems] = useState(Items)
    console.log(cartItems)

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a10-brandshop-server-side-saddam-hossain0743.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
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
                            const remainingItems = cartItems.filter(item => item._id !== _id)
                            setCartItems(remainingItems)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div>
                <img src="https://i.ibb.co/9912qbQ/view-detail-banner.png" alt="" />
            </div>
            <h2 className="text-5xl font-bold logoText mt-16 text-center">My Cart</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
                    this is marquee
                </Marquee>
            </div>
            <div>
                {
                    cartItems.map(item => <CartItem
                        key={item._id}
                        handleDelete={handleDelete}
                        item={item}></CartItem>)
                }
            </div>
        </div>
    );
};

export default MyCart;