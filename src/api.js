import request from 'superagent';
import { toCamel } from './utils/object-keys';

/**
 * Send a GET request.
 */
export const get = (path, params, headers = { 'Content-Type': 'application/json' }) =>
    request.get(`/api/${path}`)
           .query(params)
           .set(headers)
