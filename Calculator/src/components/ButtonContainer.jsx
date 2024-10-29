const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div
      id="buttuons-container"
      className="flex justify-center flex-wrap  gap-2 w-[175px] my-4"
    >
      {buttonNames.map((buttonName) => (
        <button
          type="button"
          className="text-white bg-blue-700 rounded-lg px-2 py-2.2 my-3 w-[45px] h-[45px] m-1 " onClick={()=>onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
