import React from 'react';
import { render } from 'react-dom';

import App from './App'; // Mesma pasta exige ./

// JSX: HTML dentro do Javascript (Javascript XML)
//render(<h1>Hello World</h1>, document.getElementById('app'));

// ou

render(<App />, document.getElementById('app'));
