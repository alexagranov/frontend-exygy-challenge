import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR,
    SEARCH_STRING_UPDATE,
    SEARCH_STRING_DELETE
} from '../action-types';

export const initialState = {
    currentSearch: '',
    documents: [],
    isLoading: false
};

export default (state = initialState, { type, payload, query, error }) => {
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
        case SEARCH_STRING_UPDATE:
            return {
                ...state, currentSearch: query, isLoading: true
            };
        case SEARCH_STRING_DELETE:
            return {
                ...state, currentSearch: '', isLoading: false
            }
        default:
            return state;
    }
};
