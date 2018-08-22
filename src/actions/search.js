import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR
} from 'src/action-types';
import { get } from 'src/api';

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
        get(`documents?search=${query}&api_key=123`).then(
            ({ body: { results } }) => {
                dispatch(requestSearchDocumentsSuccess(results));
            }
        ).catch(error => dispatch(requestSearchDocumentsError(query, error)));
