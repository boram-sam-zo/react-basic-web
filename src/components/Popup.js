import React, { useState } from 'react';
import './Popup.scss';

const Popup = (props) => {
  const { onClose } = props;
  return (
    <div className="popWrap">
      <div className="popBox">
        <div>
          <img src="../../img/event_popup.png" />
        </div>
        <div className="btnWrap">
          <div
            className="btn"
            onClick={() => {
              onClose(false);
            }}
          >
            닫기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
