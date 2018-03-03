import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Navig from './navig.js'
import './navig.css';
import navigList from './navigList';



ReactDOM.render(<Navig />, document.getElementById('root'));
registerServiceWorker();
