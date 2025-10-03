'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((object) => object.trim())
    .filter((object) => object !== undefined)
    .filter((object) => object.length > 0)
    .reduce((acc, object) => {
      const [key, value] = object.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
