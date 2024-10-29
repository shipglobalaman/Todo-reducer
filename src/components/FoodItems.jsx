import { useContext } from "react";
import Item1 from "./Item1";
import  {ItemContext} from "../Store/item-store";
const FoodItems = () => {

  const {items} = useContext( ItemContext);
  
  console.log(items);
  return (
    <div className=" grid grid-cols-5 gap-y-8 mt-4">
      {items.map((item) => (
        <Item1 
        // self-closing
          key={item}
          foodItems={item}
          // handleDelButton={handleDelButton}
        ></Item1>
      ))}
    </div>
  );
};
export default FoodItems;
 




