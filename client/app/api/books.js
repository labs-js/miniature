import axios from "axios";
import store from "store";

export function getBooks() {

    return axios.get("/books.json").then(function(response) {

       store.dispatch({
            type: 'GET_BOOKS',
            users: response.data
        })

return response;

    }).catch(function(err) {
        console.log(err);
    });
}
