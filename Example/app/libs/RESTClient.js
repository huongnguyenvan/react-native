import { getBaseURL } from '../configs/config';

let networkError = {
    error_code: -1,
    message: 'Network error',
    data: {}
};

export class RESTFulAPI {

    getConfig() {
        let api = getBaseURL() + "get_config";
        return this.fetchData(api);
    }

    /**
   * Api: the url of api
   * method: GET or POST
   * Body: option, the body of post method
   *
   */
    async fetchData(api, method = 'GET', body) {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        try {
            let response = await fetch(api, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return networkError;
        }
    }
}

export default RESTClient = new RESTFulAPI();
