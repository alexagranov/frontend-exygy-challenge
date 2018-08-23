import request from 'superagent';

/**
 * Send a GET request.
 */
export const get = (path, params, headers = { 'Content-Type': 'application/json' }) =>
    request.get(`/api/${path}`)
           .query(params)
           .set(headers);
