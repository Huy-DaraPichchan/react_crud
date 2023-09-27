import React, { useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';
import useCountdown from '../hooks/useCountdown';

const Home = ({ containerBgColor}) => {
  const [activeButton, setActiveButton] = useState("Pomodoro");
  const [isPaused, SetIsPaused] = useState(true);
  const { minutes, seconds } = useCountdown(30, 0, isPaused);



  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    switch (buttonName) {
      case "Pomodoro":
        containerBgColor("bg-custom-red");
        break;
      case "Short Break":
        containerBgColor("bg-custom-cyan");
        break;
      case "Long Break":
        containerBgColor("bg-custom-blue");
        break;
      default:
        containerBgColor("bg-custom-red");
        break;
    }
  };

  const toggleStartButton = () => {
    SetIsPaused(!isPaused);
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-md bg-opacity-10 text-white">
      <div className="flex flex-col justify-center items-center py-5">
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
        <div className='my-5 font-bold text-8xl'>
          <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
        </div>
        <div>
          <button style={{
            boxShadow: isPaused ? 'rgb(235, 235, 235) 0px 6px 0px' : ''
          }} className='py-3 px-10 text-custom-white bg-white rounded mt-5 mb-3' onClick={() => { toggleStartButton() }}>{isPaused ? "START" : "PAUSE"}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
