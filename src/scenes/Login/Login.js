import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValues: {
                inputEmail: '',
                inputPassword: ''
            }
        };

        this.handleSignIn = this.handleSignIn.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleSignIn(e) {
        //TODO
        console.log("Signing in: " + this.state.inputValues.inputEmail + ' : ' + this.state.inputValues.inputPassword);
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-4 col-sm-12">
                        <h2 className="form-signin-heading text-center">Sign in</h2>
                        <form className="form-signin">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required="" autoFocus="" value={this.state.inputValues.inputEmail}
                                   onChange={this.onInputChange}/>
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control"
                                   placeholder="Password" required="" value={this.state.inputValues.inputPassword}
                                   onChange={this.onInputChange}/>
                            <input type="button" className="btn btn-md btn-primary btn-block" value="Log in"
                                   onClick={this.handleSignIn}/>
                            <Link to="/register" className="text-center btn-block">Don't have account?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

