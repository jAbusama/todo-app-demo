import React from 'react';
import './style.scss';

function FloatButton({ onClick, toggle }) {
  return (
    <div className='float'>
      <div className='float__button'>
        <span
          href=''
          className='btn btn--primary btn--animate btn--lg'
          onClick={onClick}
        >
          {toggle ? ' Uncheck All' : 'Complete All'}
        </span>
      </div>
    </div>
  );
}

export default FloatButton;
