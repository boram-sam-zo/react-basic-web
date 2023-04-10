import React from 'react';
import './RemoteControl.scss';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const RemoteControl = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goToDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className="RemoteControl">
      <div className="up" onClick={goToTop}>
        <a href="#up">
          <BsChevronUp></BsChevronUp>
        </a>
      </div>
      <div className="down" onClick={goToDown}>
        <a href="#down">
          <BsChevronDown></BsChevronDown>
        </a>
      </div>
    </div>
  );
};

export default RemoteControl;
