import React, { Component } from 'react';
import { connect } from 'react-redux';
import levelDescriptions from './data/levels';
import { activateTech, deactivateTech } from './actions/activeTeches';
import { isTechActive, getTechLevel } from './reducers/activeTeches';
import './Tech.css';

class Tech_ extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() {
        let level = 1;
        if (this.props.level) {
            level = this.props.level + 1;
            if (level > 5) {
                this.props.dispatch(deactivateTech(this.props.tech.id));
                return;
            }
        }
        this.props.dispatch(activateTech(this.props.tech.id, level));
    }

    render() {
        const { names, children } = this.props.tech;
        const { active, level, levelDescription, depth } = this.props;

        return (
            <div className={'Tech'}>
                <div className="Tech__Name" onClick={this.toggleActive} style={{borderColor: levelDescription.color}}>
                    {names.en}
                    <span className="Tech__level" style={{backgroundColor: levelDescription.color}}>{level}</span>
                </div>
                <div className="Tech__LineX" />
                <div className="Tech__LineY" />
                <div className="Tech__Children">
                    {active && children &&
                        children.map(tech => <Tech key={tech.id} tech={tech} depth={depth + 1} />)
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        active: isTechActive(state, props.tech.id),
        level: getTechLevel(state, props.tech.id),
        levelDescription: levelDescriptions[getTechLevel(state, props.tech.id)]
    };
}

const Tech = connect(mapStateToProps)(Tech_);

export default Tech;
