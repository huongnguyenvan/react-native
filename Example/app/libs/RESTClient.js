import { getBaseURL } from '../configs/config';

let networkError = {
    error_code: -1,
    message: 'Network error',
    data: {}
};

export class RESTFulAPI {

    //Định nghĩa một api lấy language từ server.
    // Public api có sẵn tại https://api.ice5.skyx.app/get_languages
    
    getLanguage() {
        let api = getBaseURL() + "get_languages";
        return this.fetchData(api);
    }

    //Định nghĩa một hàm bất đồng bộ hỗ trợ các phương thức, GET, POST, PUT, DELETE (mặc định là GET)
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
