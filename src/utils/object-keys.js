import {
    camelCase, isArray, isPlainObject, reduce
} from 'lodash';

const convertKeys = (object, converter) => {
    if (isArray(object)) return object.map(innerObject => convertKeys(innerObject, converter));

    if (!isPlainObject(object)) return object;

    return reduce(object, (result, value, key) => {
        /* eslint-disable no-param-reassign */
        result[converter(key)] = convertKeys(value, converter);
        /* eslint-enable no-param-reassign */
        return result;
    }, {});
};

export const toCamel = object => convertKeys(object, camelCase);
