import { groupBy, transform } from 'lodash';

/**
 * Group by multiple fields
 *
 * @example
 *
 * groupByMany([
 * {x:1,y:1,z:1},
 * {x:1,y:2,z:1},
 * {x:2,y:1,z:1},
 * {x:2,y:2,z:1},
 * {x:1,y:1,z:2},
 * {x:1,y:2,z:2},
 * {x:2,y:1,z:2},
 * {x:2,y:2,z:2}],
 * 'x', 'y' );
 *
 * Output:
 *  {
 *    "1":{
 *      "1":[{"x":1,"y":1,"z":1},{"x":1,"y":1,"z":2}],
 *      "2":[{"x":1,"y":2,"z":1},{"x":1,"y":2,"z":2}]
 *    },
 *    "2":{
 *      "1":[{"x":2,"y":1,"z":1},{"x":2,"y":1,"z":2}],
 *      "2":[{"x":2,"y":2,"z":1},{"x":2,"y":2,"z":2}]
 *    }
 *  }
 *
 * @param {Array} array
 * @param {string} group
 * @param restGroups
 * @returns {*}
 */
function groupByMany(array, group, ...restGroups) {
  if (!group) {
    return array;
  }
  const currGrouping = groupBy(array, group);

  if (!restGroups.length) {
    return currGrouping;
  }

  return transform(currGrouping, (result, value, key) => {
    result[key] = groupByMany(value, ...restGroups);
  }, {});
}

export default groupByMany;
