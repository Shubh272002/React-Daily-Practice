import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Home';
import Store from './Redux-work/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
<Homepage/>
</Provider>
);

