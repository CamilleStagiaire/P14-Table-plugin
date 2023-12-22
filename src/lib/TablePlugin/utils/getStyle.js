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
  