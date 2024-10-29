import { createContext } from "react";
import { useReducer } from "react";

export const ItemContext = createContext([]);

let nextId = 1;

const foodItemReducer = (currFoodItem, action) => {
  let newFoodItem;
  console.log(currFoodItem);
  if (action.type === "NEW_ITEM") {
    if (action.payload.value) {
      newFoodItem = [...currFoodItem, action.payload.value];
    }
  } else if (action.type === "DEL_ITEM") {
    newFoodItem = currFoodItem.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "EDIT_ITEM") {
    return currFoodItem.map((item) =>
      item.id === action.payload.id
        ? { ...item, value: action.payload.newValue }
        : item
    );
  }
  return newFoodItem;
};

export const FoodItemContextProvider = ({ children }) => {
  const [foodItems, dispatchFoodItems] = useReducer(foodItemReducer, []);
  const addNewItem = (value) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { value: { id: nextId++, value } },
    };
    dispatchFoodItems(newItemAction);
  };
  const delItem = (id) => {
    const delItemAction = {
      type: "DEL_ITEM",
      payload: { id },
    };
    dispatchFoodItems(delItemAction);
  };
  const editItem = (id, newValue) => {
    const editItemAction = {
      type: "EDIT_ITEM",
      payload: { id, newValue },
    };
    dispatchFoodItems(editItemAction);
  };  

  return (
    <ItemContext.Provider
      value={{ items: foodItems, addNewItem: addNewItem, delItem, editItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export default FoodItemContextProvider;


//actions,reducers,store, interface
//actions -type, payload
//reducers - action,state =>state update
//in actions, export ADD_NEW_ITEM as "ADD_NEW_ITEM"