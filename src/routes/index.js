import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import HabitsPage from '../pages/HabitsPage';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/habits" component={HabitsPage} />
    </Switch>
  </div>
);

export default routes;
