import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProductNew from "../scenes/Product/ProductNew";
import GameList from "../scenes/Game/GameList";
import Navbar from "../components/Navbar";
import Redirect from "react-router-dom/es/Redirect";
import Api from "../Api";

class LoggedIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authenticated: true
        };

        this.handleAuthenticationFailed = this.handleAuthenticationFailed.bind(this);
        Api.onAuthenticationFailed = this.handleAuthenticationFailed;

        Api.instance.getGames();
    }

    handleAuthenticationFailed() {
        this.setState({authenticated: false})
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.authenticated && <Redirect to="/"/>}

                <Navbar/>

                <div className="container">
                    <Route exact path="/app/games" component={GameList}/>
                    <Route exact path="/app/products/new" component={ProductNew}/>
                </div>
            </React.Fragment>
        );
    }
}

export default LoggedIn;
