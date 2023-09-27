import '../src/assets/App.css';
import React, {useState} from "react";
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {

  const [containerBgColor, setContainerBgColor] = useState("bg-custom-red")

  const handleBgColorChange = (newColor) => {
    setContainerBgColor(newColor);
  };

  return (
    <div className={`App flex flex-col items-center justify-center file:h-screen transition duration-700 ease-in-out ${containerBgColor}`}>
      <div className='w-1/3 h-screen'>
        <Navbar />
        <div className='w-full h-px bg-custom-white mb-10'>

        </div>
        <div className='flex justify-center mt-5'>
          <Home containerBgColor={handleBgColorChange} />
        </div>
      </div>

    </div>
  );
}

export default App;
