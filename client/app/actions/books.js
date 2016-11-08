import store from "store";
import axios from "axios";

export function getBooks() {

    return axios.get("/books.json").
    then((response) => {
        store.dispatch({
            type: 'GET_BOOKS',
            users: response.data
        })

        return response;

    }).catch(function(err) {
        console.log(err);
    });
}
