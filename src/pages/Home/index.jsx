import React from 'react';
import FloatButton from '../../components/FloatButton';
import Todos from '../../components/Todos';
import AddButton from '../../components/AddButton';

function index() {
  return (
    <div>
      <FloatButton />
      <Todos />
      <AddButton />
    </div>
  );
}

export default index;
