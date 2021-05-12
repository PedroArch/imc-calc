import React from 'react';
import Dashboard from './components/Dashboard';
import Input from './components/Input'
import { descriptionsDB }  from './utils/descriptions'

import './global.css'
import Button from './components/Button';

interface Description {
  id: number;
  type: string;
  description: string;
  interval: string;
}

function App() {

  const [descriptions] = React.useState<Description[]>(descriptionsDB);
  const [weight, setWeight] = React.useState<number>(30);
  const [height, setHeight] = React.useState<number>(1.20);
  const [type, setType] = React.useState<string>('normal');
  const [intervalIndex, setIntervalIndex] = React.useState<number>(1);
  const [result, setResult] = React.useState<number>(22);
  const [currentDescription, setCurrentDescription] = React.useState<string>('')


  React.useEffect(() => {
    if (result < 18.5) setIntervalIndex(0);
    if (result >= 18.5 && result <= 24.99) setIntervalIndex(1);
    if (result >= 25 && result <= 29.99) setIntervalIndex(2);
    if (result >= 30 && result <= 34.99) setIntervalIndex(3);
    if (result >= 35 && result <= 39.99) setIntervalIndex(4);
    if (result >= 40) setIntervalIndex(5);

    setType(descriptions[intervalIndex].type)
    setCurrentDescription(descriptions[intervalIndex].description)
  }, [intervalIndex, result])


  function handleWeightChange(number: number) {
    setWeight(number);
  }

  function handleHeightChange(number: number) {
    setHeight(number);
  }

  return (
    <div className='mainContainer'>
      <h1>Calculadora IMC</h1>
      <div className="inputsWrapper">
        <Input label="Peso" attribute={weight} setAttribute={handleWeightChange}/>
        <Input label= "Altura" attribute={height} setAttribute={handleHeightChange}/>
      </div>
      <Button
       weight={weight} 
       height={height} 
       setResult={setResult}
       />
      <Dashboard result={result} type={type} description={currentDescription}/>
    </div>
  );
}

export default App;
