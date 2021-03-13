import React, { useState } from 'react';
import Todos from '../../components/Todos';
import Header from '../../components/Header';
import db from '../../db.json';

const Home = () => {
  const todosData = db.todos;
  const tabs = db.tabs;
  const [currentTodo, setCurrentTodo] = useState({});

  const todoHandler = (todo) => {
    setCurrentTodo(todo);
  };
  return (
    <div>
      <Header todo={currentTodo} />
      <Todos data={todosData} tabs={tabs} incommingTodo={todoHandler} />
    </div>
  );
};

export default Home;
