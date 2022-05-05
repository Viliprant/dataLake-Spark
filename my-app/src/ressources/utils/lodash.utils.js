import * as _ from 'lodash';

export default class LodashUtils {
    static isEmpty = (array) => {
        return _.isEmpty(array)
    }
    static isset = (item) => {
        return !_.isUndefined(item)
    }
    static isNull = item => {
        return _.isNull(item);
    }

    static range = (min, max, step = 1) => _.range(min, max+1, step);
}


