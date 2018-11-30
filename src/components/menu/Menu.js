import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </Switch>

        );
    }
}


export default Menu;