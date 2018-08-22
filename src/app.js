import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Provider } from 'react-redux';
import Browse from './pages/browse/browse';
import Home from './pages/home/home';
import Layout from './components/layout/layout';
import { getStore } from './store';
import './app.scss';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/browse" component={ Browse } />
    </Switch>
);

const App = () => (
    <Provider store={ getStore() }>
        <div className="app">
            <Layout />
            <Main />
        </div>
    </Provider>
);

export default App;
