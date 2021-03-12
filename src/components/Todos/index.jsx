import React, { useEffect, useState } from 'react';
import Header from './Header';
import GroupTab from './GroupTab';
import { Row, Col, Divider } from 'antd';
import CustomModal from '../CustomModal';
import AddButton from '../AddButton';
import FloatButton from '../../components/FloatButton';
import { sortArray } from '../../utils/utils';
const initData = { title: '', note: '', date: '', time: '' };

const Todos = (props) => {
  const { data, tabs } = props;

  const [todos, setTodos] = useState(data);
  const [selectedTodo, setSelectedTodo] = useState(initData);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    setTodos(
      JSON.parse(localStorage.getItem('todos')).sort(function (a, b) {
        return a.time.localeCompare(b.time);
      })
    );
  }, [data]);

  useEffect(() => {
    const orderedList = todos.sort(function (a, b) {
      return a.date.localeCompare(b.date);
    });
    localStorage.setItem('todos', JSON.stringify(orderedList));
  }, [todos]);

  const modalOkHandler = (actionType, values) => {
    switch (actionType) {
      case 'edit': {
        const newTodos = todos.map((item) => {
          return item.id === values.id ? values : item;
        });
        setTodos(() => [...newTodos]);
        break;
      }
      case 'add': {
        setTodos((prev) => [values, ...prev]);
        setSelectedTodo(initData);
        break;
      }
      default: {
      }
    }
    setShowModal(!showModal);
  };

  const modalCancelHandler = () => {
    setShowModal(!showModal);
  };

  const onChangeHandler = (changeType, id, data) => {
    let currentTodos = [...todos];
    switch (changeType) {
      case 'check': {
        currentTodos = currentTodos.map((item) => {
          if (item.id === id) {
            item.complete = data;
          }
          return item;
        });
        break;
      }
      case 'edit': {
        currentTodos.map((item) => {
          if (item.id === id) {
            setSelectedTodo(item);
            setShowModal(true);
          }
        });
        break;
      }
      case 'delete': {
        currentTodos = currentTodos.filter((item) => item.id !== id);
        break;
      }
      default: {
      }
    }
    if (changeType === 'edit') return;

    setLoading(true);
    setTimeout(() => {
      setTodos(currentTodos);
      setLoading(false);
    }, 500);
  };

  const handleClick = () => {
    setSelectedTodo(initData);
    setShowModal(!showModal);
  };

  const checkAll = () => {
    setToggleState(!toggleState);
    setLoading(true);
    setTimeout(() => {
      setTodos((prev) =>
        prev.map((item) => {
          if (toggleState) {
            item.complete = false;
          } else {
            item.complete = true;
          }
          return item;
        })
      );
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <FloatButton onClick={checkAll} toggle={toggleState} />

      <CustomModal
        isModalVisible={showModal}
        data={selectedTodo}
        handleOk={modalOkHandler}
        handleCancel={modalCancelHandler}
      />
      <Header />
      <div className='todo__content'>
        <div className='todo__content-tabs'>
          <Row justify='space-around'>
            <Col sm={24} md={22} lg={20}>
              <GroupTab
                tabs={tabs}
                data={todos}
                onChangeData={onChangeHandler}
                isLoading={loading}
              />
              <Divider />
            </Col>
          </Row>
        </div>
      </div>
      <AddButton handleClick={handleClick} />
    </>
  );
};

export default Todos;
