import AppHeading from '../components/AppHeading'
import './App.css'
import CalculatorButtons from '../components/CalculatorButtons';
import CalculationInput from '../components/CalculationInput';

function App() {

  return (
<div className="calculator-flex">
    <div className='calculator-container'>
        <AppHeading></AppHeading>

        <CalculationInput></CalculationInput>

        <CalculatorButtons></CalculatorButtons>

    </div>
</div>
  )
   
}

export default App;
