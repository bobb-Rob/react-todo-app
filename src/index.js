import React from 'react';
import ReactDOM from 'react-dom/client';
import './functionBased/App.css';
import TodoContainer from './functionBased/components/TodoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
