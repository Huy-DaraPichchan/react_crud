import React from 'react';

const ChoiceButton = ({ btnInfo, isActive, onClick }) => {
  const buttonClasses = `rounded px-1 ${isActive ? 'bg-custom-white' : 'bg-transparent'}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span><p>{btnInfo}</p></span>
    </button>
  );
}

export default ChoiceButton;
