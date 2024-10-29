import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
export default function App() {
  const [calVal , setCalVal] = useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal ("");
    }else if(buttonText==='='){
      let result = eval(calVal);
      setCalVal (result);
    }else{
      let newValue = calVal+buttonText;
      setCalVal (newValue);
    }
  };

  return (
    <div id="calculator" className="flex flex-col justify-center items-center border-[3px] border-black w-[300px] mt-10 ml-96 rounded-lg ">
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}