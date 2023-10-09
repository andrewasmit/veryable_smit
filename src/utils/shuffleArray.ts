export const shuffleArray = (arr: any) => {
  let currentIdx = arr.length,
    randomIdx;

  while (currentIdx > 0) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx--;

    [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
  }

  return arr;
};
