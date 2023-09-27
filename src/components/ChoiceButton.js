import React from 'react';

const ChoiceButton = ({ btnInfo, isActive, onClick }) => {
  const buttonClasses = `rounded px-2 py-1 ${isActive ? 'bg-black bg-opacity-20 font-bold' : 'bg-transparent'}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span><p>{btnInfo}</p></span>
    </button>
  );
}

export default ChoiceButton;
