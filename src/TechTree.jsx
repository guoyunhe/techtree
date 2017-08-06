import React, { Component } from 'react';
import './TechTree.css';
import techtree from './data/techtree'
import Tech from './Tech'

class TechTree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TechTree">
                {
                    techtree.map(tech => <Tech key={tech.id} tech={tech} />)
                }
            </div>
        );
    }
}

export default TechTree;
