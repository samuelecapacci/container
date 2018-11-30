import React, { Component } from 'react';
import Menu from '../menu/Menu.js';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage">
                <Menu />
                <p>sono homepage</p>
            </div>
        );
    }
}

export default Home;