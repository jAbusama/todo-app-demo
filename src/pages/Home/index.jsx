import React, { useState } from 'react';
import Todos from '../../components/Todos';
import db from '../../db.json';

const Home = () => {
  const [todosData, setTodosData] = useState(db.todos);
  const [tabs, setTabs] = useState(db.tabs);

  return (
    <div>
      <Todos data={todosData} tabs={tabs} />
    </div>
  );
};

export default Home;
