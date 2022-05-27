/**
 * @function isFerrari
 * @description Returns is object is a Ferrari car.
 * @param {Object} obj The object to check if it is a car.
 * @returns {Boolean}
 */
function isFerrari(obj) {
  if (obj.type === 'car') {
    if (obj.model === 'Ferrari') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * @function isFerrariGuardClause
 * @description Returns is object is a Ferrari car.
 * @param {Object} obj The object to check if it is a car.
 * @returns {Boolean}
 */
function isFerrariGuardClause(obj) {
  if (obj.type !== 'car') return false;
  if (obj.model !== 'Ferrari') return false;
  return true;
}

const myCar = { name: 'myCar', type: 'car', model: 'Ford' };
const myCar2 = { name: 'myCar2', type: 'car', model: 'Ferrari' };
const myCar3 = { name: 'myCar3', type: 'bike', model: 'Honda' };

console.log('\n**First example Guard clause**\n');

console.log(`myCar is ${isFerrari(myCar) ? '' : 'not '}a ferrari car.`);
console.log(`myCar2 is ${isFerrari(myCar2) ? '' : 'not '}a ferrari car.`);
console.log(`myCar3 is ${isFerrari(myCar3) ? '' : 'not '}a ferrari car.`);

console.log();

console.log(`myCar is ${isFerrariGuardClause(myCar) ? '' : 'not '}a ferrari car.`);
console.log(`myCar2 is ${isFerrariGuardClause(myCar2) ? '' : 'not '}a ferrari car.`);
console.log(`myCar3 is ${isFerrariGuardClause(myCar3) ? '' : 'not '}a ferrari car.`);

/************************************************************
 *
 * Adding more conditions
 *
 *************************************************************/

/**
 * @function isFerrariCertified
 * @description Returns is object is a Ferrari car.
 * @param {Object} obj The object to check if it is a car.
 * @returns {Boolean}
 */
function isFerrariCertified(obj) {
  if (obj.type === 'car') {
    if (obj.model === 'Ferrari') {
      if (obj.certified) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * @function isFerrariCertified
 * @description Returns is object is a Ferrari car.
 * @param {Object} obj The object to check if it is a car.
 * @returns {Boolean}
 */
function isFerrariCertifiedGuardClause(obj) {
  if (obj.type !== 'car') return false;
  if (obj.model !== 'Ferrari') return false;
  if (!obj.certified) return false;
  return true;
}

// console.log('\n**New objects and functions (Certified)**\n');

// const car = { name: 'car', type: 'car', model: 'Ford', certified: true };
// const car2 = { name: 'car2', type: 'car', model: 'Ferrari', certified: true };
// const car3 = { name: 'car3', type: 'car', model: 'Ferrari', certified: false };
// const car4 = { name: 'car4', type: 'bike', model: 'Honda', certified: true };

// console.log(`car is ${isFerrariCertified(car) ? '' : 'not '}a ferrari car.`);
// console.log(`car2 is ${isFerrariCertified(car2) ? '' : 'not '}a ferrari car.`);
// console.log(`car3 is ${isFerrariCertified(car3) ? '' : 'not '}a ferrari car.`);
// console.log(`car4 is ${isFerrariCertified(car4) ? '' : 'not '}a ferrari car.`);

// console.log();

// console.log(`car is ${isFerrariCertifiedGuardClause(car) ? '' : 'not '}a ferrari car.`);
// console.log(`car2 is ${isFerrariCertifiedGuardClause(car2) ? '' : 'not '}a ferrari car.`);
// console.log(`car3 is ${isFerrariCertifiedGuardClause(car3) ? '' : 'not '}a ferrari car.`);
// console.log(`car4 is ${isFerrariCertifiedGuardClause(car4) ? '' : 'not '}a ferrari car.`);

// console.log('\n**For loops**\n');

// const cars = [car, car2, car3, car4];

// for (const car of cars) {
//   console.log(`${car.name} is ${isFerrariCertified(car) ? '' : 'not '}a ferrari car.`);
// }

// console.log();
// for (const car of cars) {
//   console.log(`${car.name} is ${isFerrariCertifiedGuardClause(car) ? '' : 'not '}a ferrari car.`);
// }
