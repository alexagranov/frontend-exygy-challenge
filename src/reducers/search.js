import { values } from 'lodash';
import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR
} from '../action-types';

export const initialState = {
    currentSearch: '',
    results: {},
    isLoading: false
};

export default (state = initialState, { type, searchString, payload = {}, error }) => {
    switch (type) {
        default:
            return state;
    }
};
