import React, { useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';
import useCountdown from '../hooks/useCountdown';

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isPaused, SetIsPaused] = useState(true);
  

  const { minutes, seconds } = useCountdown(30, 0, isPaused);



  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleStartButton = () => {
    SetIsPaused(!isPaused);
  };

  return (
    <div className="w-full bg-red-500 text-white">
      <div className='flex flex-col justify-center items-center py-8 bg-custom-white'>
        <div className='flex flex-row justify-center pb-4'>
          <div className='mr-1'>
            <ChoiceButton
              btnInfo="Pomodoro"
              isActive={activeButton === "Pomodoro"}
              onClick={() => handleButtonClick("Pomodoro")}
            />
          </div>
          <div className='mr-1'>
            <ChoiceButton
              btnInfo="Short Break"
              isActive={activeButton === "Short Break"}
              onClick={() => handleButtonClick("Short Break")}
            />
          </div>
          <div className=''>
            <ChoiceButton
              btnInfo="Long Break"
              isActive={activeButton === "Long Break"}
              onClick={() => handleButtonClick("Long Break")}
            />
          </div>
        </div>
        <div className='py-4 font-bold text-8xl'>
          <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
        </div>
        <div>
          <button style={{
            boxShadow: isPaused ? 'rgb(235, 235, 235) 0px 6px 0px' : ''
          }} className='py-3 px-10 text-custom-white bg-white rounded' onClick={() => {toggleStartButton()}}>{isPaused ? "START" : "PAUSE"}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
