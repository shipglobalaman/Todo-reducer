import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import InputField from "./components/InputField";
import Badge from "./components/UI/Badge";
import { useReducer, useState } from "react";
import {ItemContext} from "./Store/item-store";
import FoodItemContextProvider from "./Store/item-store";

// const foodItemReducer = (currFoodItem, action) => {
//   let newFoodItem;
//   console.log(currFoodItem);
//   if (action.type === "NEW_ITEM") {
//     if (action.payload.value) {
//       newFoodItem = [...currFoodItem, action.payload.value];
//     }
//   } else if (action.type === "DEL_ITEM") {
//     newFoodItem = currFoodItem.slice(0, -1);
//   }
//   return newFoodItem;
// };

function App() {
  // let [foodItems, setFoodItems] = useState([]);
  // const [foodItems, dispatchFoodItems] = useReducer(foodItemReducer, []);
  // const addNewItem = (value) => {
  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: { value: value },
  //   };
  //   dispatchFoodItems(newItemAction);
  // };
  // const delItem = () => {
  //   const delItemAction = {
  //     type: "DEL_ITEM",
  //   };
  //   dispatchFoodItems(delItemAction);
  // };

  // const addNewItem = (value) => {
  //   if (value) {
  //     setFoodItems((prev) => [...prev, value]);
  //   }
  // };

  // const delItem = () => {
  //   foodItems.pop();
  //   setFoodItems([...foodItems]);
  // };

  return (
    // <itemContext.Provider
    //   value={{ items: foodItems, addNewItem: addNewItem, delItem: delItem }}
    // >
    <FoodItemContextProvider>
      <Container>
        <div className="flex flex-col justify-center items-center ">
          <div className="w-[100%] h-6 mb-6 mt-[-34px] flex justify-end ml-20">
            <Badge cardItem={"Card"} />
          </div>
          <h1 className="font-bold text-2xl text-white">ADD YOUR NOTES</h1>

          <InputField />
          <ErrorMessage />
          
        </div>
        
        <FoodItems />
        
      </Container>
    </FoodItemContextProvider>
    // </itemContext.Provider>
  );
}

export default App;
