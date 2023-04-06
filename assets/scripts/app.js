let calculationDescription = '';
// let defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// 10 => "10"  method => toString()
// "10" => 10  method => parseInt()
// "10.6" => 10.6  method => parseFloat()

function getUserNumberFromInput() {
  return parseFloat(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberFromInput(); //3
  const initialResult = currentResult;

  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else {
    console.log('Invalid Operator');
    return;
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  // individual responsibility
  // common part should be grouped together and invoked on demand
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}
// function divide() {
//   calculateResult('DIVIDE');
// }

function divide() {
  calculateResult('DIV');
}
// divide(); // invoke => execute

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
