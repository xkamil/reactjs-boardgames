import React, {Component} from 'react';
import ValidationAlert from "../../components/alerts/ValidationAlert";
import {Link} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValues: {
                inputEmail: '',
                inputPassword: '',
                inputRepeatPassword: '',
            },
            validationAlerts: []
        };

        this.handleRegister = this.handleRegister.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleRegister(e) {
        let validationErrors = [];


        if (this.state.inputValues.inputPassword !== this.state.inputValues.inputRepeatPassword) {
            validationErrors.push('Passwords don\'t match');
        }

        if (this.state.inputValues.inputPassword.length < 5) {
            validationErrors.push('Password is too short. Minimum length is 5');
        }

        this.setState({validationAlerts: validationErrors});
    }

    onInputChange(e) {
        let newState = {};
        newState[e.target.id] = e.target.value;

        this.setState((previousState) => ({
            inputValues: Object.assign(previousState.inputValues, newState)
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-4 col-sm-12">
                        <h2 className="text-center">Register</h2>
                        <form>
                            <ValidationAlert messages={this.state.validationAlerts}/>

                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required="" autoFocus="" value={this.state.inputValues.inputEmail}
                                   onChange={this.onInputChange}/>

                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control"
                                   placeholder="Password" required="" value={this.state.inputValues.inputPassword}
                                   onChange={this.onInputChange}/>

                            <label htmlFor="inputRepeatPassword" className="sr-only">Repeat password</label>
                            <input type="password" id="inputRepeatPassword" className="form-control"
                                   placeholder="Repeat password" required=""
                                   value={this.state.inputValues.inputRepeatPassword} onChange={this.onInputChange}/>

                            <input className="btn btn-md btn-primary btn-block" type="button" value="Register"
                                   onClick={this.handleRegister}/>

                            <Link to="/" className="text-center btn-block">Already have account?</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register;

