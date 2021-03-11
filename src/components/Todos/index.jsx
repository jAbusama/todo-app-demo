import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import GroupTab from './GroupTab';
import { Row, Col, Divider } from 'antd';

function Todos() {
  return (
    <>
      <Header />
      <div className='todo__content'>
        <div className='todo__content-tabs'>
          <Row justify='space-around'>
            <Col sm={24} md={22} lg={20}>
              <GroupTab />
              <Divider />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Todos;
