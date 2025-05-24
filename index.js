import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StockAggregatorApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StockAggregatorApp />
  </React.StrictMode>
);