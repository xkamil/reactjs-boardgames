import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import LoggedIn from "./LoggedIn";
import Login from "../scenes/Login/Login";
import Register from "../scenes/Register/Register";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/app" component={LoggedIn}/>
                </div>
            </Router>
        );
    }
}

export default App;
