export const updateStateObject = (oldState, newState) => ({
  ...oldState,
  ...newState,
});

// function to parse API links header
// Converts the string into an Object
// eg.: { first: 1, previous: 2, next: 4, last: 13 }
export const parseLinks = links => {
  const res = {};
  const linksArray = links.replace(/<|>/g, '').split(',');
  linksArray.forEach(link => {
    const rel = /rel=([^&]*)/;
    const pageNumber = /_page=([^&]*)/;
    const match = link.match(rel)[1].match(/\w+/);
    res[match] = parseInt(link.match(pageNumber)[1], 10);
  });
  return res;
};
