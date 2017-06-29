import objectPath from 'object-path';

/**
 * Create a new object or array by remapping the properties of the supplied
 * value.
 * @param {Object|Array} value The source value.
 * @param {Object.<string, string>} map The map used to reassign values.
 * Keys are the destination keys and values are the source keys.
 * @param {boolean} createArray A flag designating whether or not an array will
 * be returned.
 * @returns {Object|Array} The remapped value.
 * @see https://github.com/mariocasciaro/object-path
 * */
export default function remap (value, map, createArray = false) {
  let newValue;

  if (value instanceof Object && map instanceof Object) {
    newValue = createArray ? [] : {};

    for (const k in map) {
      const fromProperty = map[k];
      const toProperty = k;
      const fromValue = objectPath.get(value, fromProperty);

      objectPath.set(newValue, toProperty, fromValue);
    }
  }

  return newValue;
}
