import React, {Component} from 'react';
import Api from "../../Api";
import {Redirect} from 'react-router-dom'
import Validator from "../../utils/Validator";

class ProductNew extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            validationErrors: {},
            price: 0,
            quantity: 0,
            productSaved: false
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();

        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity
        };

        Api.add('/products', newProduct).then((product) => {
            this.setState({productSaved: true});
        }).catch((error) => {
            if (error.status === 409) {
                alert('Produkt ' + this.state.name + ' już istnieje!')
            } else {
                alert(error.status)
            }
        })

    }

    handleChange(e) {
        let errors = Validator.validate(e.target);

        this.setState((prevState) => ({
            validationErrors: Object.assign(prevState.validationErrors, errors)
        }));

        let state = {};
        state[e.target.getAttribute('id')] = e.target.value;

        this.setState(state)
    }

    showValidationErrors(field) {
        if (!this.state.validationErrors[field]) {
            return null;
        }

        return (
            <ul style={{listStyleType: 'none'}} className="alert-sm alert-danger">
                {this.state.validationErrors[field].map((error, index) => <li key={index}> - {error}</li>)}
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <h2>Dodaj produkt</h2>
                <br/>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nazwa produktu</label>
                        {this.showValidationErrors('name')}
                        <input type="text" className="form-control" id="name" value={this.state.name}
                               onChange={this.handleChange} validators={['required']}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Cena</label>
                        {this.showValidationErrors('price')}
                        <input type="text" className="form-control" id="price" value={this.state.price}
                               onChange={this.handleChange} validators={['price', 'required']}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Ilość</label>
                        {this.showValidationErrors('quantity')}
                        <input type="text" className="form-control" id="quantity" value={this.state.quantity}
                               onChange={this.handleChange} validators={['number', 'required']}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>Zapisz</button>
                </form>

                {this.state.productSaved && <Redirect to="/products"/>}
            </div>

        );
    }
}

export default ProductNew;
