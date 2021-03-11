import React from 'react';
import { Tabs, List, Avatar, Checkbox, Button } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { TabPane } = Tabs;

function GroupTab() {
  const data = [
    {
      title: 'Ant Design Title 1',
      note:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, culpa.',
      group: 'Work',
      date: moment().format('MMM Do'),
      time: moment().format('h:mm a'),
      complete: false,
    },
    {
      title: 'Ant Design Title 2',
      note:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, culpa.',
      group: 'Personal',
      date: moment().format('MMM Do'),
      time: moment().format('h:mm a'),
      complete: false,
    },
    {
      title: 'Ant Design Title 3',
      note:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, culpa.',
      group: 'Other',
      date: moment().format('MMM Do'),
      time: moment().format('h:mm a'),
      complete: false,
    },
    {
      title: 'Ant Design Title 4',
      note:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, culpa.',
      group: 'Personal',
      date: moment().format('MMM Do'),
      time: moment().format('h:mm a'),
      complete: false,
    },
  ];

  const EditButton = () => {
    return <Button type='link' icon={<EditOutlined />} />;
  };

  const DeleteButton = () => {
    return <Button type='link' icon={<DeleteOutlined />} size='large' />;
  };

  const tabs = [
    { title: 'Today', key: 1 },
    { title: 'Tomorrow', key: 2 },
    { title: 'Upcomming', key: 3 },
  ];

  const TaskDescription = ({ data }) => {
    return (
      <div className='task'>
        <div className='task__group'>
          <span>{data.group}</span>
        </div>
        <div className='task__period'>
          <span className='task__period-date'>
            <CalendarOutlined />
            {data.date}
          </span>
          <span className='task__period-time'>
            <FieldTimeOutlined />
            {data.time}
          </span>
        </div>
        <div className='task__note'>
          <span>{data.note}</span>
        </div>
      </div>
    );
  };

  const TabsContent = () => (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<EditButton />, <DeleteButton />, <Checkbox />]}>
          <List.Item.Meta
            avatar={
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            }
            title={item.title}
            description={<TaskDescription data={item} />}
          />
        </List.Item>
      )}
    />
  );

  return (
    <Tabs defaultActiveKey='1'>
      {tabs.map((item) => (
        <TabPane tab={<span>{item.title}</span>} key={item.key}>
          <TabsContent />
        </TabPane>
      ))}
    </Tabs>
  );
}

export default GroupTab;
