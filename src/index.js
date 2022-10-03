import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

//new style
const root = createRoot(document.getElementById('root'));
root.render(<App/>);

//old style
// ReactDOM.render(
// <App />,
// document.getElementById('root')
// );



