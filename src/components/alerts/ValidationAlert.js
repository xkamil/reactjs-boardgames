import React, {Component} from 'react';
import './ValidationAlert.css';

class ValidationAlert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({messages: []});
    }

    componentWillReceiveProps(nextProps) {
        let propertiesChanged = false;

        Object.getOwnPropertyNames(this.props).forEach((prop)=>{
            if(this.props[prop] !== nextProps[prop]){
                propertiesChanged = true;
            }
        });

        if(propertiesChanged){
            this.setState({messages: nextProps.messages})
        }
    }

    render() {

        const listItems = this.state.messages.map((message, index) => (
            <li key={index}>- {message}</li>
        ));

        return (
            this.state.messages.length > 0 &&

            <div className="alert alert-danger cmp-validation-alert"
                 style={{display: this.state.messages.length > 0 ? 'block' : 'none'}}>
                <ul>{listItems}</ul>
                <span onClick={this.handleClose}><strong>x</strong></span>
            </div>
        )
    }
}

export default ValidationAlert;

