import React, { Fragment } from 'react';

// components
import { Route, Routes } from 'react-router-dom';

import routes from './routes';

// TODO: cache component
const routerListRecursion = (routes: any[]) => {
  return (
    <Fragment>
      {routes.map((route: any, index) => {
        const { children: childRoutes, ...props } = route;
        return (
          <Route {...props} key={index}>
            {childRoutes &&
              childRoutes.length > 0 &&
              routerListRecursion(childRoutes)}
          </Route>
        );
      })}
    </Fragment>
  );
};

const Router: React.FC = () => {
  return <Routes>{routerListRecursion(routes)}</Routes>;
};

export default Router;
