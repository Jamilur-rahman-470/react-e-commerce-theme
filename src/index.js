import React from 'react';
import ReactDOM from 'react-dom';
import RootRoute from './routes/root';
import './base.css';


ReactDOM.render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>,
  document.getElementById('root')
);

