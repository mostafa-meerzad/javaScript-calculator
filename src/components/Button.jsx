
import { useDispatch } from 'react-redux';
import { decimal, number, operator, setInitial, clearLast } from '../features/CalculatorSlice';
const NumberBtn = ({id, content, className}) => {
  const dispatch = useDispatch()

  const operators = " add subtract divide multiply remainder equals "
  const numbers = " one two three four five six seven eight nine zero "

  return (
    <button id={id} className={" button numpad__button " + className} onClick={() => {
      if(numbers.match(RegExp( id ))){
        dispatch(number(content))

      } else if(operators.match(RegExp( id ))){
        dispatch(operator(content))
        
      } else if(id === "clear"){
        dispatch(setInitial())

      } else if(id === 'decimal'){
        dispatch(decimal('.'))
  
      }else if(id === 'clear-last'){
        dispatch(clearLast())
      }
      else{
        return
      }
    }} >{content}</button>
  )
}

export default NumberBtn