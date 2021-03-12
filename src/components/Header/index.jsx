import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import { sortArray } from '../../utils/utils';
import './style.scss';

function Header() {
  const today = moment().format('MMM Do');
  const [todos, setTodos] = useState([]);
  const [dueTodo, setDueTodo] = useState(todos);

  useEffect(() => {
    setTodos(
      sortArray(JSON.parse(localStorage.getItem('todos')), 'date').filter(
        (item) => moment(item.date).format('MMM Do') === today
      )
    );
  }, []);

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
