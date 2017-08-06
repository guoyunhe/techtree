import React, { Component } from 'react';
import './Tech.css';

class Tech extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, names, children } = this.props.tech;
        return (
            <div className="Tech">
                <div className="Tech__Name">{names.en}</div>
                <div className="Tech__LineX" />
                <div className="Tech__LineY" />
                <div className="Tech__Children">
                    {children &&
                        children.map(tech => <Tech key={tech.id} tech={tech} />)
                    }
                </div>
            </div>
        );
    }
}

export default Tech;
