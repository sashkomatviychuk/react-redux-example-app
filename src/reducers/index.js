import {
    DATA_REQUEST_STARTED,
    DATA_REQUEST_FINISHED,
    DATA_REQUEST_ERROR
} from '../actions/index'

let initialState = {
    loading: false,
    loadedOnce: false,
    errors: null,
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUEST_STARTED:
            return {
                ...state,
                loading: true,
                errors: null,
            }
        case DATA_REQUEST_FINISHED:
            return {
                loading: false,
                errors: null,
                loadedOnce: true,
                items: action.items
            };
        case DATA_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.errors,
            };
        default:
            return state;
    }
}
