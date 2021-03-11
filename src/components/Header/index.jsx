import React from 'react';
import { Row, Col } from 'antd';
import './style.scss';

function Header() {
  return (
    <header className='app__header'>
      <div className='app__header-text'>
        <Row justify='space-around' align='middle'>
          <Col sm={12} md={10} lg={8}>
            <div className='event'>
              <div className='event__category'>Today</div>
              <div className='event__name'>
                <span>Meeting With Someone</span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={10} lg={8}>
            <div className='event'>
              <div className='event__period'>
                <span>
                  Overdue in <b>23 Minutes</b>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
