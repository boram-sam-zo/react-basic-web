import React from 'react';
import './TemplateWrap.scss';

const TemplateWrap = ({ children }) => {
  return (
    <div className="TemplateWrap">
      <div className="contents">{children}</div>
    </div>
  );
};

export default TemplateWrap;
