import React, { useEffect, useState } from 'react';
import { Modal, Row, Col, notification } from 'antd';
import PropTypes from 'prop-types';
import Button from '../Button';
import Form from '../Form';
import { v4 } from 'uuid';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import './style.scss';

const CustomModal = (props) => {
  const initData = { title: '', note: '', date: '', time: '' };
  const { isModalVisible, handleOk, handleCancel, data = initData } = props;

  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setValues(data);
  }, [data]);

  const handlerChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const validateForms = () => {
    const { title, note, date, time } = values;
    if (!title) {
      openNotification('Title');
      return false;
    }
    if (!note) {
      openNotification('Note');
      return false;
    }
    if (!date) {
      openNotification('Date');
      return false;
    }
    if (!time) {
      openNotification('Time');
      return false;
    }
    return true;
  };

  const passData = (type, newTodo) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleOk(type, newTodo);
      setValues(initData);
    }, 300);
  };

  const submit = () => {
    let newTodo = values;
    if (values.id === undefined) {
      if (validateForms()) {
        newTodo.id = v4();
        newTodo.complete = false;
        passData('add', newTodo);
      }
      return;
    } else {
      if (validateForms()) {
        passData('edit', newTodo);
      }
    }
  };

  const openNotification = (name) => {
    notification.error({
      message: 'Validation Error',
      description: `Please Enter ${name} `,
    });
  };

  return (
    <Modal
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      destroyOnClose
      footer={null}
      bodyStyle={{ backgroundColor: '#6443f0' }}
    >
      <div className='content'>
        <Form
          section='Todo'
          formValues={values}
          onChangeHandler={handlerChange}
        />
      </div>
      <div className='actions'>
        <Row justify='space-around'>
          <Col>
            <Button secondary round onClick={handleCancel} isLoading={loading}>
              {loading ? (
                <LoadingOutlined style={{ fontSize: '1.6rem' }} />
              ) : (
                <CloseOutlined style={{ fontSize: '1.6rem' }} />
              )}
            </Button>
          </Col>
          <Col>
            <Button primary md onClick={submit} isLoading={loading}>
              {loading && <LoadingOutlined style={{ fontSize: '1.4rem' }} />}{' '}
              Add Todo
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isModalVisible: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
};

CustomModal.defaultProps = {
  isModalVisible: false,
  handleOk: () => null,
  handleCancel: () => null,
};

export default CustomModal;
