class Validator {

    static validate(field) {
        let validators = field.getAttribute('validators');
        let value = field.value;

        validators = validators.split(',');

        if (validators.length === 1 && validators[0].toString().length === 0) {
            validators = [];
        }

        let errors = [];

        validators.forEach((validator) => {

            if (!Validator.hasOwnProperty(validator)) {
                throw 'Validator ' + validator + ' not found!';
            }

            let error = this[validator](value);

            if (error) {
                errors.push(error);
            }
        });

        let obj = {};
        obj[field.id] = errors.length > 0 ? errors : null;
        return obj;
    }

    static required(value) {
        if (!value || value.toString().trim().length === 0) {
            return 'This field is required'
        }
        return null;
    }

    static price(value){
        if(!new RegExp("^[0-9]+(\.[0-9]{2}){0,1}$").test(value)){
            return 'Invalid currency format!'
        }
    }

    static number(value){
        if(!new RegExp("^[0-9]+$").test(value)){
            return 'Invalid number!'
        }
    }
}

export default Validator;