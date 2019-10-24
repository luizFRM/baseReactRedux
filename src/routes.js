import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import pages from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((page, i) => {
          var pageName = '';
          if(i !== 0) pageName = page.WrappedComponent.name;

          return <Route exact path = {"/"+ pageName } component = { page } />
        })}
      </Switch>
    </BrowserRouter>
  );
}
