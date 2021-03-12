import React, { useState, useEffect } from 'react';
import { Tabs, List, Spin, Checkbox, Button } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { TabPane } = Tabs;

const GroupTab = (props) => {
  const { data, tabs, onChangeData, isLoading } = props;

  const [todosList, setTodosList] = useState(data);
  const [currentTab, setCurrentTab] = useState('1');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTodosList(data);
  }, [data]);

  useEffect(() => {
    filteringTodo();
  }, [data, currentTab]);

  const filteringTodo = () => {
    const today = moment().format('MMM Do');
    const tomorrow = moment().add(1, 'day').format('MMM Do');
    let list = [];
    if (currentTab === '1') {
      list = data.filter(
        (item) => moment(item.date).format('MMM Do') === today
      );
    } else if (currentTab === '2') {
      list = data.filter(
        (item) => moment(item.date).format('MMM Do') === tomorrow
      );
    } else {
      list = data.filter(
        (item) =>
          moment(item.date).format('MMM Do') !== today &&
          moment(item.date).format('MMM Do') !== tomorrow
      );
    }
    setTodosList(list);
  };

  const EditButton = ({ onClickHandler, id }) => {
    return (
      <Button
        type='link'
        icon={<EditOutlined />}
        onClick={() => onClickHandler(id)}
      />
    );
  };

  const DeleteButton = ({ onClickHandler, id }) => {
    return (
      <Button
        type='link'
        icon={<DeleteOutlined />}
        onClick={() => onClickHandler(id)}
      />
    );
  };

  const onChangeHandler = (e, id) => {
    onChangeData('check', id, e.target.checked);
  };

  const onDeleteHanlder = (id) => {
    onChangeData('delete', id);
  };

  const onEditHanlder = (id) => {
    onChangeData('edit', id);
  };

  const onChangeTab = (key) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentTab(key);
      setLoading(false);
    }, 500);
  };

  const TaskDescription = ({ data }) => {
    return (
      <div className='task'>
        <div className='task__group'>
          <span>{data.group}</span>
        </div>
        <div className='task__period'>
          <span className='task__period-date'>
            <CalendarOutlined />
            {moment(data.date).format('MMM Do')}
          </span>
          <span className='task__period-time'>
            <FieldTimeOutlined />
            {moment(data.time).format('h:mm a')}
          </span>
        </div>
        <div className='task__note'>
          <span>{data.note}</span>
        </div>
      </div>
    );
  };

  const TabsContent = () => (
    <Spin tip='Loading...' spinning={isLoading || loading}>
      <List
        itemLayout='horizontal'
        dataSource={todosList}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <EditButton onClickHandler={onEditHanlder} id={todo.id} />,
              <DeleteButton onClickHandler={onDeleteHanlder} id={todo.id} />,
              <Checkbox
                checked={todo.complete}
                onChange={(e) => onChangeHandler(e, todo.id)}
              />,
            ]}
          >
            <List.Item.Meta
              className={`${todo.complete && 'todo-complete'}`}
              title={todo.title}
              description={<TaskDescription data={todo} />}
            />
          </List.Item>
        )}
      />
    </Spin>
  );

  return (
    <>
      <Tabs defaultActiveKey='1' onChange={onChangeTab}>
        {tabs.map((item) => (
          <TabPane tab={<span>{item.title}</span>} key={item.id}>
            <TabsContent />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default GroupTab;
