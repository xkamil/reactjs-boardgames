import axios from 'axios'

class Api {
    static instance = this.instance ? this.instance : new Api();
    static URL = "http://127.0.0.1:3005";
    static onAuthenticationFailed;

    getGames() {
        return this.get('/games');
    }

    static handleError(error) {
        if(error && error.response && error.response.status === 401 && Api.onAuthenticationFailed){
            Api.onAuthenticationFailed();
        }
    }

    get(path) {
        return new Promise((resolve, reject) => {
            let config = {
                method: 'get',
                url: Api.URL + path,
                headers:{
                    'x-access-token': 'secret_token_1'
                }
            };

            axios.request(config).then((response) => {
                if (response.status < 400) {
                    return resolve(response.data)
                }
                return reject({code: response.status, response: response.data})
            }).catch(Api.handleError)
        })
    }

    remove(path, id) {
        return new Promise((resolve, reject) => {
            axios.delete(Api.URL + path + '/' + id).then((response) => {
                if (response.status < 400) {
                    return resolve(response.data)
                }
                return reject(response.status)
            }).catch(Api.handleError)
        })
    }

    add(path, data){
        return new Promise((resolve, reject) => {

            axios.post(Api.URL + path, data).then((response) => {
                if (response.status < 400) {
                    return resolve(response.data)
                }
                return reject(response.status)
            }).catch(Api.handleError)
        })
    }
}

export default Api;
