import { toCamel } from '../utils/object-keys';
import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR
} from '../action-types';
import { get } from '../api';

export const requestSearchDocumentsSuccess = payload => ({
    type: REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    payload: {
        payload
    }
});

export const requestSearchDocumentsError = (query, error) => ({
    type: REQUEST_SEARCH_DOCUMENTS_ERROR,
    payload: {
        query,
        error
    }
});

export const requestSearchDocuments = query =>
    dispatch =>
        get('documents', { search: query, api_key: '123' }).then(
            (response) => {
                dispatch(requestSearchDocumentsSuccess(toCamel(response.body)));
            }
        ).catch(error => dispatch(requestSearchDocumentsError(query, error)));
