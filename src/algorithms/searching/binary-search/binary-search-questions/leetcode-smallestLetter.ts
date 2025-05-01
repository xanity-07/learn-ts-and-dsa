const data = ['c', 'd', 'f', 'j'];

const smallestLetter = (letters: string[], target: string) => {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (target > letters[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return letters[start % letters.length];
};
console.log(smallestLetter(data, 'e'));
