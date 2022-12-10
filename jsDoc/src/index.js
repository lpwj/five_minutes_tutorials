/**
 * @module SomeClass 
 * @description This is the main module of the application.
 * <b>The main goal is to build something with a specific height and width.</b>
 *
 * Some list here:
 *  - 1
 *  - 2
 *  - 3
 *
 * @author LPWJ
 */

/**
 * This class represents the instance we want to generate
 */
class SomeClass {
  /**
   * @method constructor
   * @description Creates the class instance.
   * @param {Number} height The height value.
   * @param {Number} width The width value.
   */
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  /**
   * @method getHeight
   * @description Returns the height of the given instance.
   * @returns {Number} height value.
   */
  getHeight() {
    return this.height;
  }

  /**
   * @method getWidth
   * @description Returns the width of the given instance.
   * @returns {Number} width value.
   */
  getWidth() {
    return this.width;
  }
}
