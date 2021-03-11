import React, { useState } from 'react';
import { debounce } from 'lodash';

import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss';

const SearchButton = () => {
  const onSearch = (e) => {
    console.log(e);
  };

  const [state, setState] = useState(false);
  const [value, setValue] = useState('');

  const onBlur = debounce(() => {
    if (!value && state) setState(false);
  }, 200);

  const onChange = (val) => {
    setValue(val);
    onSearch(val.trim());
  };

  const showInput = debounce(() => {
    setState(!state);
  }, 200);

  let tableInputElem = null;
  return (
    <div className='searchBox'>
      <Input
        value={value}
        placeholder='Search'
        id='tableInputSearch'
        onChange={(e) => onChange(e.target.value)}
        className={state ? 'searchInputVisible' : 'searchInputHid'}
        ref={(node) => {
          tableInputElem = node;
        }}
        onBlur={onBlur}
      />
      {/* <Button type='link' className='searchButton' onClick={showInput}> */}
      <div
        className={`searchButton ${state ? 'active' : 'not-active'}`}
        onClick={showInput}
      >
        <SearchOutlined />
      </div>
      {/* </Button> */}
    </div>
  );
};

export default SearchButton;
