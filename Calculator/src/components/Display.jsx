const Display=({displayValue})=>{
return (
    <div><input  id="display" type="text"   className="border border-black w-[180px] h-14 mt-4 " value={displayValue} readOnly/></div>

);
};
export default Display;