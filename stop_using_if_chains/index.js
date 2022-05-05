const OPTIONS = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  k: 'K',
};

/**
 * @function checkingStuff
 * @description Checks the value of the code and returns based on it
 * @param {String} code
 * @returns Some calculation
 */
function checkingStuff(code) {
  if (code === 'A') {
    const variable = 123;
    const otherVariable = 555;
    return variable + otherVariable;
  } else if (code === 'B') {
    const variable = 13;
    const otherVariable = 555;
    return variable + otherVariable;
  } else if (code === 'C') {
    const variable = 123;
    const otherVariable = 56;
    return variable + otherVariable;
  } else if (code === 'D') {
    const variable = 23;
    const otherVariable = 5;
    return variable + otherVariable;
  } else if (code === 'E') {
    const variable = 3;
    const otherVariable = 99;
    return variable + otherVariable;
  } else if (code === 'F') {
    const variable = 22;
    const otherVariable = 55;
    return variable + otherVariable;
  } else if (code === 'G') {
    const variable = 89;
    const otherVariable = 33;
    return variable + otherVariable;
  } else if (code === 'H') {
    const variable = 22;
    const otherVariable = 87;
    return variable + otherVariable;
  } else if (code === 'I') {
    const variable = 164;
    const otherVariable = 864;
    return variable + otherVariable;
  } else if (code === 'J') {
    const variable = 978;
    const otherVariable = 235;
    return variable + otherVariable;
  } else if (code === 'K') {
    const variable = 78;
    const otherVariable = 25;
    return variable + otherVariable;
  } else {
    return null;
  }
}

/**
 * @function checkingStuff2
 * @description Checks the value of the code and returns based on it
 * @param {String} code
 * @returns Some calculation
 */
function checkingStuff2(code) {
  if (code === OPTIONS.a) {
    const variable = 123;
    const otherVariable = 555;
    return variable + otherVariable;
  } else if (code === OPTIONS.b) {
    const variable = 13;
    const otherVariable = 555;
    return variable + otherVariable;
  } else if (code === OPTIONS.c) {
    const variable = 123;
    const otherVariable = 56;
    return variable + otherVariable;
  } else if (code === OPTIONS.d) {
    const variable = 23;
    const otherVariable = 5;
    return variable + otherVariable;
  } else if (code === OPTIONS.e) {
    const variable = 3;
    const otherVariable = 99;
    return variable + otherVariable;
  } else if (code === OPTIONS.f) {
    const variable = 22;
    const otherVariable = 55;
    return variable + otherVariable;
  } else if (code === OPTIONS.g) {
    const variable = 89;
    const otherVariable = 33;
    return variable + otherVariable;
  } else if (code === OPTIONS.h) {
    const variable = 22;
    const otherVariable = 87;
    return variable + otherVariable;
  } else if (code === OPTIONS.i) {
    const variable = 164;
    const otherVariable = 864;
    return variable + otherVariable;
  } else if (code === OPTIONS.j) {
    const variable = 978;
    const otherVariable = 235;
    return variable + otherVariable;
  } else if (code === OPTIONS.k) {
    const variable = 78;
    const otherVariable = 25;
    return variable + otherVariable;
  } else {
    return null;
  }
}

/**
 * @function checkingStuff3
 * @description Checks the value of the code and returns based on it
 * @param {String} code
 * @returns Some calculation
 */
function checkingStuff3(code) {
  if (code === OPTIONS.a) {
    return sumVariables(123, 555);
  } else if (code === OPTIONS.b) {
    return sumVariables(13, 555);
  } else if (code === OPTIONS.c) {
    return sumVariables(123, 56);
  } else if (code === OPTIONS.d) {
    return sumVariables(23, 5);
  } else if (code === OPTIONS.e) {
    return sumVariables(3, 99);
  } else if (code === OPTIONS.f) {
    return sumVariables(22, 55);
  } else if (code === OPTIONS.g) {
    return sumVariables(89, 33);
  } else if (code === OPTIONS.h) {
    return sumVariables(22, 87);
  } else if (code === OPTIONS.i) {
    return sumVariables(164, 864);
  } else if (code === OPTIONS.j) {
    return sumVariables(978, 235);
  } else if (code === OPTIONS.k) {
    return sumVariables(78, 25);
  } else {
    return null;
  }
}

/**
 * @function sumVariables
 * @description Sums two variables and returns the value
 * @param {Number} variable1
 * @param {Number} variable2
 * @returns
 */
function sumVariables(variable1, variable2) {
  return variable1 + variable2;
}

const functionsMapping = {
  A: sumVariables(123, 555),
  B: sumVariables(13, 555),
  C: sumVariables(123, 56),
  D: sumVariables(23, 5),
  E: sumVariables(3, 99),
  F: sumVariables(22, 55),
  G: sumVariables(89, 33),
  H: sumVariables(22, 87),
  I: sumVariables(164, 86),
  J: sumVariables(978, 235),
  K: sumVariables(78, 25),
};

/**
 * @function checkingStuffUsingTheObjectsPower
 * @description Checks the value of the code and returns based on it
 * @param {String} code
 * @returns Some calculation
 */
function checkingStuffUsingTheObjectsPower(code) {
  if (!Object.hasOwnProperty.call(functionsMapping, code)) {
    return null;
  }
  return functionsMapping[code];
}

console.log(functionsMapping['B']);
console.log(checkingStuffUsingTheObjectsPower('B'));
