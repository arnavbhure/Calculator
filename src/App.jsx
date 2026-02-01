import AppHeading from '../components/AppHeading'
import './App.css'
import CalculatorButtons from '../components/CalculatorButtonsAndInput';

function App() {

  return (
<div className="calculator-flex">
    <div className='calculator-container'>
        <AppHeading></AppHeading>

        <CalculatorButtons></CalculatorButtons>

    </div>
</div>
  )
   
}

export default App;
