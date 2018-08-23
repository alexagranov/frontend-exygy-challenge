import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR
} from '../action-types';

export const initialState = {
    query: '',
    documents: [],
    isLoading: false
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case REQUEST_SEARCH_DOCUMENTS_SUCCESS:
            return {
                ...state,
                documents: payload,
                isLoading: false
            };
        case REQUEST_SEARCH_DOCUMENTS_ERROR:
            return {
                ...state, error, isLoading: false
            };
        default:
            return state;
    }
};
