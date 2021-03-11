import React from 'react';
import { Row, Col } from 'antd';

function AddButton() {
  return (
    <Row justify='center' style={{ marginTop: '.8rem' }}>
      <Col>
        <a
          href=''
          className='btn  btn--primary btn--primary-round btn--animate'
        >
          <span>+</span>
        </a>
      </Col>
    </Row>
  );
}

export default AddButton;
