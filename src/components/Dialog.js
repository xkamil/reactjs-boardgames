import React, {Component} from 'react';

class Dialog extends Component {

    render() {
        return (
            <p style={{margin: 5, backgroundColor: this.props.color}}>
                <strong>{this.props.message}</strong>
            </p>
        );
    }
}

export default Dialog;
