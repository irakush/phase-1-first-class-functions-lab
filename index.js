// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => arr.slice(-2);

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