import binarySearch from './binarySearch.ts';

const data = [-32, -21, -17, -9, -3, -1, 0, 3, 5, 6, 9, 10, 18, 22, 27, 31, 36];

function runTests() {
  console.assert(binarySearch(data, 0) === true, 'Test Failed: Should find 0');
  console.assert(
    binarySearch(data, 27) === true,
    'Test Failed: Should find 27'
  );
  console.assert(
    binarySearch(data, -32) === true,
    'Test Failed: Should find -32'
  );
  console.assert(
    binarySearch(data, 100) === false,
    'Test Failed: Should not find 100'
  );
  console.assert(
    binarySearch([], 0) === false,
    'Test Failed: Should not find 0 in an empty array'
  );

  console.log('All tests passed.');
}

runTests();
