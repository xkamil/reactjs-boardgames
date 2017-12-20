import React, {Component} from 'react';

class ProductRecord extends Component {

    render() {

        let price = this.props.price.toString();

        if(price.length > 2){
            price = price.slice(0, price.length-2) + '.' + price.substr(price.length - 2);
        }

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{price}</td>
                <td>{this.props.quantity}</td>
                <td>
                    <input
                        type="button"
                        className="btn btn-sm btn-success"
                        value="edytuj"
                        onClick={()=>{this.props.handleEdit(this.props.productId)}}
                        />
                    <input
                        type="button"
                        className="btn btn-sm btn-danger"
                        value="usuń"
                        onClick={()=>{this.props.handleDelete(this.props.productId)}}
                    />
                </td>
            </tr>
        );
    }
}

export default ProductRecord;
