// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => [arr[0], arr[1]];

const returnLastTwoDrivers = (arr) => [arr[arr.length-2], arr[arr.length-1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
  return function(b) {
    return a * b;
  }
}

const fareDoubler = (a) => createFareMultiplier(a)(1) * 2;

const fareTripler = (a) => createFareMultiplier(a)(1) * 3;

function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers)
}