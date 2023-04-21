var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var buttonElement = document.querySelector('button');
var numResult = [];
var textResult = [];
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
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1Element = num1 === null || num1 === void 0 ? void 0 : num1.value;
    var num2Element = num2 === null || num2 === void 0 ? void 0 : num2.value;
    var result = add(+num1Element, +num2Element);
    numResult.push(result);
    var stringResult = add(num1Element, num2Element);
    textResult.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, textResult);
});
