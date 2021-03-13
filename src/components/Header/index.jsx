import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { isEmpty } from 'lodash';
import moment from 'moment';
import './style.scss';

function Header({ todo }) {
  const [currentTodo, setCurrentTodo] = useState(todo);

  useEffect(() => {
    setCurrentTodo(todo);
  }, [todo]);

  const getTitle = () => {
    if (!isEmpty(currentTodo)) {
      return (
        <>
          <div className='event__name'>
            <span>{currentTodo.title}</span>
          </div>
          <div className='event__time'>
            @ {moment(currentTodo.time).format('h:mm a')}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='event__name'>
            <span>No Incomming Todo</span>
          </div>
        </>
      );
    }
  };

  return (
    <header className='app__header'>
      <div className='app__header-text'>
        <Row justify='space-around' align='middle'>
          <Col sm={12} md={10} lg={8}>
            <div className='event' style={{ textAlign: 'center' }}>
              <div className='event__category'>Today</div>
              {getTitle()}
            </div>
          </Col>
          {/* <Col sm={12} md={10} lg={8}>
            <div className='event'>
              <div className='event__period'>
                <span>
                  Overdue in <b>23 Minutes</b>
                </span>
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
    </header>
  );
}

export default Header;
