/**
 * Introduction to Javascript
 *
 * Exercise:
 *  Code a function that tells if a number is multiple of 10. The function can receive any type of data, so it
 *  should handle more than one result.
 */

/**
 *
 * @param {*} multiple
 * @param {*} base
 * @returns a boolean value which indicates (true): It's a multiple number; (false): It is not a multiple number.
 */
function isMultiple(multiple, base) {
  return multiple % base === 0;
}

function run() {
  const baseNumber = 10; // Number that represents the base value with which others will validate if they are multiple of this.
  const multipleNumber = null; // Number that represents the possible multiple of the base number.

  switch(typeof multipleNumber) {
    // If it's a number starts to validate if it's a multiple number of the base number.
    case "number":
      const result = isMultiple(multipleNumber, baseNumber);
      if (result) {
        console.log(`🟢 ${multipleNumber} is a multiple of ${baseNumber} 👍🏻`);
      } else {
        console.log(`🔴 ${multipleNumber} isn't a multiple of ${baseNumber} 👎🏻`);
      }
      break;
    default:
      console.log(`🚨🚨🚨 The type "${typeof multipleNumber}" isn't valid, it must be a number`);
  }
}

run();
