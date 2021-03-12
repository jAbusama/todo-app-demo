import React from 'react';
import { Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function AddButton({ handleClick }) {
  return (
    <Row justify='center' style={{ marginTop: '.8rem' }}>
      <Col>
        <span
          className='btn  btn--primary btn--round btn--animate'
          onClick={handleClick}
        >
          <PlusOutlined style={{ fontSize: '1.6rem' }} />
        </span>
      </Col>
    </Row>
  );
}

export default AddButton;
