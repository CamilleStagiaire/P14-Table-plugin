/**
 * Fonction pour gérer le style
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {Function}
 */
const getStyleFunction = (r, g, b) => (isSorted, isOddRow, selectPagination) => {
    let backgroundColor;
    if (isSorted || isOddRow) {
      backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    } else if (selectPagination) {
      backgroundColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
    }
    return { backgroundColor };
  };
  
  export default getStyleFunction;
