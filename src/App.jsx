import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [colorSeed, setColorSeed] = useState("ffffff");
  const [colorMode, setColorMode] = useState("analogic");
  const [scheme, setScheme] = useState([]);

  // console.log('color seed',colorSeed);

  function handleColorSeed(e) {
    setColorSeed(e);
  }

  function handleColorMode(e) {
    setColorMode(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getColorScheme();
    console.log('my color',scheme)
  }

  // useEffect(() => {
  //   getColorScheme();
  // }, [colorSeed, colorMode]);

  async function getColorScheme() {
    try {
      const response = await axios.get(
        `https://www.thecolorapi.com/scheme?hex=${colorSeed.slice(1)}&mode=${colorMode}&count=5`
      );

      setScheme(response.data.colors);
    } catch (error) {
      console.log("My error", error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="min-w-[550px]">
          <Navbar
            colorSeed={colorSeed}
            setColorSeed={setColorSeed}
            handleColorSeed={handleColorSeed}
            colorMode={colorMode}
            handleColorMode={handleColorMode}
            handleSubmit={handleSubmit}
          />
          <Main scheme={scheme} />
        </div>
      </div>
    </>
  );
}

export default App;
