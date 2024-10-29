import { useContext } from "react";
import  {ItemContext}  from "../Store/item-store";
const ErrorMessage = () => {
  // const contextObj = useContext(itemContext);
  // const items = contextObj.items;

  // after destructuring the code looks like :
  const {items} = useContext(ItemContext);

  return (
    <>{items.length === 0 && <h3 className="text-white font-extrabold mt-48 text-7xl">"Note it down , Keep it Around"</h3>}</>
  );
};

export default ErrorMessage;
