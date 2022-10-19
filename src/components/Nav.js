import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav>
                <div >
                    <h4>Fodie</h4>
                </div>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">Recipes</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;