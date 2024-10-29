import { useContext, useState } from "react";
import { ItemContext } from "../Store/item-store";


const InputField = () => {
  // const handleButtonClick=(e)=>{
  //   const itemField = e.target.previousElementSibling;
  //   handleAddButton(itemField);
  // }

  const { addNewItem } = useContext(ItemContext);
  

  const [input, setInput] = useState("");
  const hadleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleButtonClick = () => {
    addNewItem(input);
    setInput("");
    
  };

  return (
    <div >
      <input
        value={input}
        type="text"
        placeholder="write here ..."
        onChange={hadleOnChange}
        className="mt-4 mb-2 border-white rounded-md w-60 h-8 p-2"
      />
      <button
        className=" bg-slate-200 text-black w-16 h-7 ml-1 rounded-lg"
        onClick={handleButtonClick}
      >
        Add
      </button>
    </div>
  );
};
export default InputField;
