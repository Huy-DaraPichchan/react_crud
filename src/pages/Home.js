import React, { useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-full bg-red-500 p-4">
      <div className='flex flex-row justify-center'>
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
      <div>
        <p>30</p>
      </div>
      <div>
        {/* Content related to the selected choice can be added here */}
      </div>
    </div>
  );
};

export default Home;
