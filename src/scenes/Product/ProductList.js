import React, {Component} from 'react';
import Api from "../../Api";
import ProductRecord from "./ProductRecord";

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        Api.getProducts().then((products) => {
            let productsList = products.map((product) => {
                return (
                    <ProductRecord key={product._id}
                                   productId={product._id}
                                   name={product.name}
                                   price={product.price}
                                   quantity={product.quantity}
                                   handleEdit={this.handleEdit}
                                   handleDelete={this.handleDelete}
                    />
                );
            });

            this.setState({products: productsList})
        })
    }

    handleEdit(id) {
        //TODO implement
        alert("You want to edit product with id: " + id + " but edit is not yet implemented")
    }

    handleDelete(id) {
        Api.deleteProduct(id).then(() => {
            this.fetchProducts();
        })
    }

    render() {
        return (
            <div className="App">
                <h2>Lista pruduktów</h2>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;
