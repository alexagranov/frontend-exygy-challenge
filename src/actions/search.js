import { toCamel } from '../utils/object-keys';
import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    REQUEST_SEARCH_DOCUMENTS_ERROR,
    SEARCH_STRING_UPDATE,
    SEARCH_STRING_DELETE
} from '../action-types';
import { get } from '../api';

export const requestSearchDocumentsSuccess = payload => ({
    type: REQUEST_SEARCH_DOCUMENTS_SUCCESS,
    payload
});

export const requestSearchDocumentsError = (error) => ({
    type: REQUEST_SEARCH_DOCUMENTS_ERROR,
    error
});

export const requestSearchDocuments = query =>
    dispatch =>
        get('documents', { search: query }).then(
            (response) => {
                dispatch(requestSearchDocumentsSuccess(toCamel(response.body)));
            }
        ).catch(error => dispatch(requestSearchDocumentsError(error)));

export const setSearchString = (searchString) => ({
    type: SEARCH_STRING_UPDATE,
    query: searchString
});

export const clearSearchString = () => ({
    type: SEARCH_STRING_DELETE
});
