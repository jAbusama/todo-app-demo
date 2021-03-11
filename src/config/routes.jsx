import Home from '../pages/Home';

export const routes = [
  {
    path: '/',
    label: 'Dashboard',
    key: 'dashboard',
    isHidden: false,
    exact: true,
    component: Home,
  },
];
