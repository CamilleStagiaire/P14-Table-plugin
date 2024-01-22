/**
 * Fonction pour obtenir les valeurs RGB à partir d'une couleur hexadécimale.
 * @param {string} hex 
 * @returns {Object}
 */
const hexToRgb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };
  
  export default hexToRgb;
