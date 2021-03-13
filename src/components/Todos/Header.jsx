import React from 'react';
import { Row, Col } from 'antd';
// import SearchInput from '../Search';
import './style.scss';

function Header() {
  return (
    <div className='todo__header'>
      <div className='todo__radio'>
        <Row justify='space-around'>
          {/* <Col sm={12} md={10} lg={8}>
            <div className='todo__category'>
              <CategoryRadio />
            </div>
          </Col> */}
          <Col xs={24} md={20} lg={16}>
            {/* <SearchInput /> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
