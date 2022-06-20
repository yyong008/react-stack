import React, { useEffect } from 'react';

// routes
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

// styles
import './global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
