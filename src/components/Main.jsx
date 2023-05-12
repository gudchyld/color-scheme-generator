const Main = ({scheme}) => {
  return (
  
      <div>
        <div className="flex">
         {scheme.map((color) => {
          return (
            <div
            className="w-1/5"
            key={color.hex.value}
            >
              <div
              className=" h-[550px]"
              style={{backgroundColor: color.hex.value}}
              ></div>
              <div
              className="text-center"
              >{color.hex.value}</div>

            </div>
          )
         })}
         </div>
        
      </div>
    
  );
};

export default Main;
