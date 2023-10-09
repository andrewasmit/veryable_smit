export const shuffleArray = (arr) => {
  let currentIdx = arr.length,
    randomIdx;

  // While there remain elements to shuffle.
  while (currentIdx > 0) {
    // Pick a remaining element.
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx--;

    // And swap it with the current element.
    [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
  }

  return arr;
};
