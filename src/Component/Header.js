import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UseSelector, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";



const Header=()=>{
    const [btnNameReact,setBtnNameReact] = useState("Login")
     
  const onlineStatus=useOnlineStatus(); 
  const cartItems =useSelector((store)=> store.cart.items)
  console.log(cartItems);
      return(
          <div className="flex justify-between bg-yellow-200  shadow-xl sm:max-h-24 sticky top-0 z-50 ">
  <div className="w-[120px] ">
<Link to="/"><img src={LOGO_LINK}/></Link>
  </div>
  <div className="nav-items flex -ml-12">
  <ul className=" flex items-center p-4 mx-3">
      <li className="hidden md:block sm:px-5">Online Status:{onlineStatus? "✅":"🟥"}</li>
      <li className="hidden xl:block hover:bg-white text-black rounded-xl h-10 p-[8]"><Link  to="/">Home</Link></li>
      <li className="hidden xl:block hover:bg-white text-black rounded-xl h-10 p-[8]"><Link to="/contact">Contact Us</Link></li>
      <li className="hidden xl:block hover:bg-white text-black rounded-xl h-10 p-[8]"><Link to="/about">About</Link></li>
      <li className=" hidden xl:block hover:bg-white text-black rounded-xl h-10 p-[8]  "><Link  className="flex items-center"to="/cart"><FaCartShopping/> - {cartItems.length}</Link> </li>
      <button className="login bg-gray-100 hidden xl:block hover:bg-white text-black rounded-xl h-10 p-[8] ml-4" onClick={()=>{
         btnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login")
          
      }}>
          {btnNameReact}
      </button>
  </ul>
  </div>
          </div>
      )
  }
export default Header;