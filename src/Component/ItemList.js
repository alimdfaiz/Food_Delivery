import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  function handleImageError() {
    
    document.querySelector('.image-container img').remove();
  };
  const dispatch = useDispatch();
  const handleAddItem=(item)=>{
dispatch(addItem(item));
  }
  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="h-[170px] border-b-2" key={item.card.info.id}>
            <div
              className="p-2 m-2 border-gray-200  text-left flex justify-between"
            >
              <div className="py-2 ">
                <div>{item.card.info.name}</div>
                <div>₹ {item.card.info.price / 100}</div>
              </div>
              <div>
              <img 
                src={CDN_LINK + item.card.info.imageId } 
                className="w-[120px] h-[100px] overflow-hidden"
              />
              <button className="p-[38px] py-0 ml-[0px] bg-blue-100 font-semibold shadow-lg absolute mx-8 mb-64  hover:bg-blue-500" onClick={()=>handleAddItem(item)}>Add +</button>
              </div>
              
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;