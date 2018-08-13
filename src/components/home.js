import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopBar from '../../../frontend-challenge-pattern-library/src/materials/molecules/navigation/top-bar.html';
import { loadPartials } from '../../lib/handlebars-template-helpers';
import './home.css';

class Home extends Component {
    componentDidMount() {
        loadPartials();
        const node = ReactDOM.findDOMNode(this);
        node.innerHTML = TopBar();
    }
    
    render() {
        return <div />;
    }
}

export default Home;
