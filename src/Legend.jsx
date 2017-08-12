import React, { Component } from 'react';
import levelDescriptions from './data/levels';
import './Tech.css'
import './Legend.css';

export default class Legend extends Component {
    render() {
        return (
            <div className="Legend">
                {levelDescriptions.map(level =>
                    <div className="Legend__item" key={level.id} title={level.description}>
                        <span className="Legend__item__value" style={{backgroundColor: level.color}}>{level.id}</span>
                        <span className="Legend__item__name">{level.name}</span>
                    </div>
                )}
            </div>
        );
    }
}
