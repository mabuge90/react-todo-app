import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddTodoList from './AddTodoList';

let destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <h1>Welcome to my To Do app!</h1>
        <AddTodoList/>
    </div>,
    destination
);

