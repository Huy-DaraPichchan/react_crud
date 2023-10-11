import '../src/assets/App.css';
import React, { useState } from "react";
import Timer from './pages/Timer';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';

const App = () => {

  const [containerBgColor, setContainerBgColor] = useState("bg-custom-red")

  const handleBgColorChange = (newColor) => {
    setContainerBgColor(newColor);
  };

  return (
    <div className={`App flex flex-col items-center justify-center text-white file:h-screen transition duration-700 ease-in-out ${containerBgColor}`}>
      <div className='w-1/3 h-screen'>
        <Navbar />
        <div className='w-full h-px bg-custom-white mb-10'>

        </div>
        <div className='flex flex-col items-center justify-center mt-5'>
          <Timer containerBgColor={handleBgColorChange} />
          <div className='w-[75%] flex py-2'>
            <TaskList />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
