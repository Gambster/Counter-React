import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorld';

import './custom.css'




ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
);