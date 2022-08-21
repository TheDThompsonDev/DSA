// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// Constraints:

// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^9
// 0 <= k <= arr.length

function findLeastUniqueInts(arr, k) {
  //Thought process when attempting this:
  //go through array
  //map and set values
  //Find the number of events for each value
  // compare the number of events and subtract it from the counter

  let newMap = new Map()
  arr.forEach((valueFromArr) => {
    newMap.set(valueFromArr, newMap.get(valueFromArr) + 1 || 1)
  })
  let numberOfEvents = Array.from(newMap.values())
  numberOfEvents.sort((a, b) => a - b)
  let uniqueIntCounter = numberOfEvents.length
  for (let num of numberOfEvents) {
    if (k >= num) {
      k -= num
      uniqueIntCounter--
    } else return uniqueIntCounter
  }
  return uniqueIntCounter
}
findLeastUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3)
