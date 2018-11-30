import React, {Component} from 'react';
import Menu from '../menu/Menu.js';
import './contacts.css';

class Contacts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contacts">
                <Menu />
                <p>sono contacts</p>
            </div>
        );
    }
}


export default Contacts;