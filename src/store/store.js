
import { configureStore } from '@reduxjs/toolkit';
import  calculatorSlice  from './../features/CalculatorSlice';
export const store = configureStore({
    reducer:{
        calculator: calculatorSlice
    }
})

// console.log(calculatorSlice)