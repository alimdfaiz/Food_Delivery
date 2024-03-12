import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClearcart=()=>{
dispatch(clearCart());
    };
return(
    <div className="text-center m-4 p-4">
        <h1 className="font-bold text-3xl">Cart</h1>
        <div className="w-6/12 m-auto ">
            <button className="p-4 m-4 bg-gray-200 text-black font-bold rounded-lg" onClick={handleClearcart}>Clear Cart</button>
            {cartItems.length===0 && <img
            className="w-[300px] m-auto mt-8 "
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0 "/>}
            {cartItems.length===0 &&  <h1 className="mt-16 font-bold text-gray-700"> Cart is empty, Please add items to the cart</h1>}
          
             {cartItems.length===0 && <p className="text-gray-500">You can go to home page to view more restaurants</p>}
            <ItemList items={cartItems}/>
        </div>
    </div>
)
}
export default Cart;