import React, { useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';
import useCountdown from '../hooks/useCountdown';

const Timer = ({ containerBgColor }) => {
  const [activeButton, setActiveButton] = useState("Pomodoro");
  const [isPaused, setIsPaused] = useState(true);




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
    setIsPaused(!isPaused);
  };

  const { minutes, seconds, cycleCounter } = useCountdown(0, 2, isPaused, setIsPaused);

  const handleBtnColor = (activeButton) => {
    if (activeButton === "Pomodoro") {
      return "text-custom-red"
    } else if (activeButton === "Short Break") {
      return "text-custom-cyan"
    } else if (activeButton === "Long Break") {
      return "text-custom-blue"
    } else {
      return "text-custom-red"
    }
  }

  return (
    <>
      <div className="w-[75%] max-w-xl bg-white rounded-md bg-opacity-10 text-white">
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
            <button className={`py-3 px-10 bg-white rounded mt-5 mb-3 transition duration-700 ease-in-out ${handleBtnColor(activeButton)}`}
              onClick={() => { toggleStartButton() }}
              style={{
                boxShadow: isPaused ? 'rgb(235, 235, 235) 0px 6px 0px' : '',
              }} >
              {isPaused ? "START" : "PAUSE"}
            </button>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white opacity-60 hover:opacity-100 cursor-pointer'>#{cycleCounter}</p>
          <h1 className='text-lg text-white'>Time to focus!</h1>
        </div>
      </div>
    </>
  );
};

export default Timer;
