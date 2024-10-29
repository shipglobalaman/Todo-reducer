import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { ItemContext } from "../Store/item-store";
import { useState } from "react";
import Card from "./UI/card";


const Item1 = ({ foodItems }) => {
  const { delItem, editItem } = useContext(ItemContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(foodItems.value);
  

  const handleDelete = () => {
    delItem(foodItems.id);
  };
  const handleEdit = () => {
    if (isEditing) {
      editItem(foodItems.id, newValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="ml-20">
      {isEditing ? (
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="text-lg font-extrabold mt-1"
        />
      ) : (
        <Card fooditems={foodItems.value}></Card>
        // <div className="text-lg font-extrabold mt-1 ">{foodItems.value}</div>
      )}
      <div className="flex gap-2">
        <button
          type="button"
          className="text-black text-lg  justify-center flex mt-1 border bg-white rounded-md pt-1 h-7"
          onClick={handleDelete}
        >
          <AiFillDelete />
        </button>
        <button
          className="text-black w-10 justify-center flex mt-1 border bg-white rounded-md "
          onClick={handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};
export default Item1;
