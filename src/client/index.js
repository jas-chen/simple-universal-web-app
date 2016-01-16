import React from 'react';
import ReactDOM from 'react-dom';
import App from 'shared/view/App';

const node = document.getElementById('app');

// get state from backend
const state = window.__state;

ReactDOM.render(<App num={state.num} />, node);
