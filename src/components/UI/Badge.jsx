import { useContext } from "react";
import { ItemContext } from "../../Store/item-store";

const Badge = ({ cardItem, style }) => {
  const { items } = useContext(ItemContext); 

  return (
    <div>
      <span
        className={` ${style} bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
      >
        {cardItem} - {items.length} 
      </span>
    </div>
  );
};

export default Badge;
