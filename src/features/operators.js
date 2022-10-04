
const makeRound = num => {
  return Math.round(Number(num) * 10000) / 10000;
};
const regex =/\d\.\d{4}/

export const operations = (firstNum, secondNum, operator) => {

  switch (operator) {
    case "+": {
      let result = String(Number(firstNum) + Number(secondNum));
      if (result.match(regex)) {
        return makeRound(result);
      } else {
        return result;
      }
    }
    case "-": {
    
      let result = String(Number(firstNum) - Number(secondNum));
      if (result.match(regex)) {
        return makeRound(result);
      } else {
        return result;
      }
    }
    case "÷": {
      let result = String(Number(firstNum) / Number(secondNum));
      if (result.match(regex)) {
        return makeRound(result);
      } else {
        return result;
      }
    }
    case "×": {
      let result = String(Number(firstNum) * Number(secondNum));
      if (result.match(regex)) {
        return makeRound(result);
      } else {
        return result;
      }
    }
    default:
      return;
  }
};
