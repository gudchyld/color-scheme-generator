const Main = ({scheme}) => {
  return (
  
      <div>
        <div className="flex">
         {scheme.map(color => {
          return (
            <div className="w-1/5 h-[450px] p-2 m-1" 
            key={color.hex.value}
            style={{backgroundColor: color.hex.value}}>
            
            </div>
          )
         })}
         </div>
        <div></div>
      </div>
    
  );
};

export default Main;
