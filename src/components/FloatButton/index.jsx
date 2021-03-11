import React from 'react';
import { Button } from 'antd';
import './style.scss';

function FloatButton() {
  return (
    <div className='float'>
      <div className='float__button'>
        <a href='' className='btn btn--primary btn--animate btn--lg'>
          Complete All
        </a>
      </div>
    </div>
  );
}

export default FloatButton;
