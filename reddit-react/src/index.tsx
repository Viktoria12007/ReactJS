import * as React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';

window:addEventListener('load',() => {
ReactDOM.render(<Header />, document.getElementById('react_root'));
});
