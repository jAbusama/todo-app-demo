import React, { useState } from 'react';
import { Radio } from 'antd';
import {
  CalendarFilled,
  FolderFilled,
  SearchOutlined,
} from '@ant-design/icons';

function CategoryRadio() {
  const options = [
    {
      label: <CalendarFilled style={{ fontSize: '2.5rem' }} />,
      value: 'Calendar',
    },
    {
      label: <FolderFilled style={{ fontSize: '2.5rem' }} />,
      value: 'Group',
    },
  ];

  const [value, setValue] = useState('Calendar');

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      options={options}
      value={value}
      optionType='button'
      onChange={onChangeRadio}
      size='large'
    />
  );
}

export default CategoryRadio;
