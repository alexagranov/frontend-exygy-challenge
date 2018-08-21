import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './components/home';
import Layout from './components/layout/layout';
import './app.scss';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
);

const App = () => (
    <div className='app'>
        <Layout />
        <Main />
    </div>
);

export default App;
