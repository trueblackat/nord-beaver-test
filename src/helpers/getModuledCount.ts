/**
 * Get moduled count
 * @param count {number} - general count
 * @param min {number} - min value
 * @param module {number} - module step
 * @return {number} - result
 */
export default (count: number, min: number, module: number): number => {
  if (count <= min) { // +
    return min - count;
  }

  if (count % module) {
    return module - (count % module);
  }

  return 0;
};
