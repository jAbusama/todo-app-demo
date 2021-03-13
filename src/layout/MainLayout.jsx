import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from '../components/Header';
import { PageNotFound } from '../components/404';
import { routes } from '../config/routes';
import './style.scss';

function MainLayout() {
  return (
    <div className='flex'>
      <main className='main'>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default MainLayout;
