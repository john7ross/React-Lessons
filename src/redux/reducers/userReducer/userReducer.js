import {ERROR, LOAD_USERS, LOADING} from "../../actions/actionTypes";
import {errorAction, loadingAction, loadUsersAction} from "../../actions/actions";

const initialState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case LOAD_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export const loadUsers = () => {
    return async dispatch => {
       dispatch(loadingAction());
       try{
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
           const data = await response.json();
           dispatch (loadUsersAction(data))
       } catch (e) {
           dispatch(errorAction(e));
       }
    }
}