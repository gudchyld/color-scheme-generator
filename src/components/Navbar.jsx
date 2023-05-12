/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = ({ colorSeed, handleColorSeed, handleColorMode, handleSubmit }) => {
 const [buttonStyle, setButtonStyle] = useState({})

 function handleButtonStyle(){
  setButtonStyle({
    backgroundColor:"#16A085",
    color:"white"
  })
 }

  return (
    <>
      <form className="flex items-center justify-between"
        onSubmit={e => handleSubmit(e)}
      >
        <input
          className="border-2 w-1/6 h-10 cursor-pointer"
          type="color"
          name="color"
          id="color"
          value={colorSeed}
          onInput={(e) => {
            handleColorSeed(e.target.value);
          }}
        />
        <select
          className="w-3/6 text-sm py-2 px-6 border-2 bg-transparent"
          id="color-mode"
          name="color-mode"
          onChange={(e) => handleColorMode(e.target.value)}
        >          
          <option value="monochrome">monochrome</option>
          <option value="monochrome-dark">monochrome-dark</option>
          <option value="monochrome-light">monochrome-light</option>
          <option value="analogic">analogic</option>
          <option value="complement">complement</option>
          <option value="analogic-complement">analogic-complement</option>
          <option value="triad">triad</option>
          <option value="quad">quad</option>
        </select>
        <button className="text-sm py-2 px-6  border-2"
         type="submit"
         style={buttonStyle}
         onClick={handleButtonStyle}

        >
          Get scheme
        </button>
      </form>
    </>
  );
};

export default Navbar;
