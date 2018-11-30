import React, {Component} from 'react';
import Menu from '../menu/Menu.js';
import './about.css';

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about">
                <Menu />
                <p>sono about</p>
            </div>
        );
    }
}


export default About;