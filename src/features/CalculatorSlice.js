import { createSlice } from "@reduxjs/toolkit";
import { operations } from "./operators";

const initialState = {
  firstNum: "",
  firstNumSign: "",
  secondNum: "",
  secondNumSign: "",
  operator: "",
  result: "",
  error: false
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    number: (state, action) => {
      if (state.operator) {
        if (action.payload === "0") {
          if (state.secondNum.startsWith("0")) {
            if (state.secondNum.match(/\./)) {
              state.secondNum += action.payload;
            } else {
              state.error = true;
            }
          } else {
            state.secondNum += action.payload;
          }
        } else {
          state.secondNum += action.payload;
        }
      } else {
        if (action.payload === "0") {
          if (state.firstNum.startsWith("0")) {
            if (state.firstNum.match(/\./)) {
              state.firstNum += action.payload;
            } else {
              state.error = true;
            }
          } else {
            state.firstNum += action.payload;
          }
        } else {
          state.firstNum += action.payload;
        }
      }
    },
    operator: (state, action) => {
  

       if (action.payload === "=") {
        if (state.secondNum) {
          state.result = operations(
            state.firstNumSign + state.firstNum,
            state.secondNumSign + state.secondNum,
            state.operator
          );
          // state.firstNum = "";
          state.firstNum = state.result;
          state.firstNumSign = "";
          state.secondNum = "";
          state.secondNumSign = "";
          state.operator = "";
        } else {
          console.log("first block else ");
        }
      } else {
        if (state.firstNum && state.secondNum) {
          state.result = operations(
            state.firstNumSign + state.firstNum,
            state.secondNumSign + state.secondNum,
            state.operator
          );
  
          state.firstNum = state.result;
          state.firstNumSign = "";
          state.secondNum = "";
          state.secondNumSign = "";
          state.operator = action.payload;
        } else {
          if (action.payload === "-") {
            if (state.firstNum) {
              if (state.operator) {
                if (state.operator === "-" || state.operator === "+") {
                  state.operator = action.payload;
                } else {
                  state.secondNumSign = action.payload;
                }
              } else {
                state.operator = action.payload;
              }
            } else {
              state.firstNumSign = action.payload;
            }
          } else {
            if(action.payload === "+"){
              state.operator = action.payload
              state.secondNumSign = ''
            }
            else{
              if (state.firstNum) {
                state.operator = action.payload;
              } else {
                console.log(" error ");
              }
            }
          }
        }
      }
    },
    decimal: (state, action) => {
      if (state.operator) {
        if (state.secondNum) {
          if (state.secondNum.match(/\./)) {
            state.error = true;
          } else {
            state.secondNum += action.payload;
          }
        } else {
          state.secondNum = "0.";
        }
      } else {
        if (state.firstNum) {
          if (state.firstNum.match(/\./)) {
            state.error = true;
          } else {
            state.firstNum += action.payload;
          }
        } else {
          state.firstNum = "0.";
        }
      }
    },
    setInitial: state => {

      state.firstNum = "";
      state.firstNumSign = "";
      state.secondNum = "";
      state.secondNumSign = "";
      state.operator = "";
      state.result = "";
      state.error = null;
    },
    clearLast: state => {
      if (state.secondNum) {
        state.secondNum = state.secondNum.slice(0, state.secondNum.length - 1);

      } else if (state.operator) {
        state.operator = "";
      } else if (state.firstNum) {
        state.firstNum = state.firstNum.slice(0, state.firstNum.length - 1);

      }
    },

    error: state => {
      setTimeout(() => {
        state.error = false;
      }, 500);
    }
  }
});

export const selectFirstNum = state => {
  return `${state.calculator.firstNumSign}${state.calculator.firstNum}`;
};

export const selectSecondNum = state => {
  return `${state.calculator.secondNumSign}${state.calculator.secondNum}`;
};

export const selectResult = state => {
  return state.calculator.result;
};

export const selectOperator = state => {
  return state.calculator.operator;
};
export const selectError = state => {
  return state.calculator.error;
};

export const {
  number,
  operator,
  decimal,
  setInitial,
  clearLast
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
