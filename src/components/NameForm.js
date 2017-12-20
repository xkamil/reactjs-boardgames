import React, {Component} from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            errors: [],
            select: 2,
            fields: []
        };

        this.validators = {
            name: {
                '^[a-ząęśżźćł].*$': 'Imię może składać się tylko z liter',
                '^.{3,5}$': 'Imię musi składać się z min 3 i max 5 znaków'
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleAddField = this.handleAddField.bind(this);
    }

    isValid(fieldName, value) {
        let isValid = true;

        Object.getOwnPropertyNames(this.validators[fieldName]).forEach((regex) => {
            isValid = new RegExp(regex).test(value) ? isValid : false;
        });

        return isValid;
    }

    handleChange(event) {
        let name = event.target.getAttribute('name');
        let value = event.target.value;

        if (!this.isValid(name, value)) {
            event.target.setAttribute('class', 'input-invalid')
        } else {
            event.target.setAttribute('class', 'input-valid')
        }

        console.log(event.target.getAttribute('name'));
        this.setState({value: event.target.value})
    }

    handleChangeSelect(event){
        console.log('selected value: ' + event.target.value);
        this.setState({select: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`Sending name ${this.state.value}`);
        alert(`Sending name ${this.state.value}`);
    }

    handleAddField(){
        this.setState((prevState)=>(
            {fields : [...prevState.fields, 1]}
        ))
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>

                <input type="button" value="add field" onClick={this.handleAddField}/>


                <label>
                    Name:
                    <input className="input-empty" name="name" type="text" value={this.state.value}
                           onChange={this.handleChange}/>
                </label>

                {this.state.fields.map(field=><input className="input-empty" name="name" type="text" value={this.state.value}
                                                     onChange={this.handleChange}/>)}

                <label>
                    City:
                    <select multiple={true} name="city" id="city" value={[this.state.select]} onChange={this.handleChangeSelect}>
                        <option value="1">Krakow</option>
                        <option value="2">Warsaw</option>
                        <option value="3">Gdańsk</option>
                    </select>
                </label>

                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

export default NameForm;
