const mountainArray: number[] = [2, 3, 5, 7, 11, 9, 6, 4, 1];
function findInMountain(mountainArr: number[], target: number): number {
  const peak: number = findPeakIndex(mountainArr);
  const firstTry: number = orderAgnosticBinarySearch(
    mountainArr,
    target,
    0,
    peak
  );
  if (firstTry !== -1) {
    return firstTry;
  }
  return orderAgnosticBinarySearch(
    mountainArr,
    target,
    peak + 1,
    mountainArr.length - 1
  );
}

function findPeakIndex(mountainArr: number[]): number {
  let lo: number = 0;
  let hi: number = mountainArr.length - 1;
  while (lo < hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    if (mountainArr[middle] > mountainArr[middle + 1]) {
      hi = middle;
    } else {
      lo = middle + 1;
    }
  }
  return lo;
}

function orderAgnosticBinarySearch(
  mountainArr: number[],
  target: number,
  lo: number,
  hi: number
): number {
  const isAscending: boolean = mountainArr[lo] < mountainArr[hi];
  while (lo <= hi) {
    const middle: number = Math.floor(lo + (hi - lo) / 2);
    const middleValue: number = mountainArr[middle];
    if (target === middleValue) {
      return middle;
    }
    if (isAscending) {
      if (target > middleValue) {
        lo = middle + 1;
      } else {
        hi = middle - 1;
      }
    } else {
      if (target > middleValue) {
        hi = middle - 1;
      } else {
        lo = middle + 1;
      }
    }
  }
  return -1;
}
console.log(findInMountain(mountainArray, 1));
