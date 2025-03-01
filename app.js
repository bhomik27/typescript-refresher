"use strict";
const num1elem = document.getElementById('num1');
const num2elem = document.getElementById('num2');
const buttonelem = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.value);
}
buttonelem.addEventListener('click', () => {
    const num1 = num1elem.value;
    const num2 = num2elem.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringresult = add(num1, num2);
    stringResults.push(stringresult);
    printResult({ value: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
