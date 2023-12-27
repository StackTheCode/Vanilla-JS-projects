import { useEffect,useState } from 'react';
import './App.css';
import './index'
const App=()=> {

  const [data,setData]=useState([]);
  const [outcome,setOutcome]= useState(0)
  const [inputValue, setInputValue] = useState(35);  
 useEffect(() =>{
   const getData = async() => {
      const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
  const data = await response.json();
  setData(data);

     
   }
   getData();
 },[] );

  
const convertToCurrency = (currency)=>{

const currencyData = data.find(item => item.cc === currency);
if(currencyData && inputValue !==undefined){
  const outcome = (inputValue / currencyData.rate).toFixed(2);
 setOutcome(outcome)
}
else{
  console.log('Something went wrong');
}


}

  return (
  
    <div className="app">
      <div className="wrapper">
      <h3>Сумма в гривне :</h3>
      <input className='starterValue' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} ></input>
      </div>
      <div className="counter">{outcome}</div>
      <div className="controls">
        <button onClick={()=> convertToCurrency('CAD')} >CAD</button>
        <button onClick={()=> convertToCurrency('GBP')}>GBR</button>
        <button onClick={()=> convertToCurrency('USD')}>USD</button>
        <button onClick={()=> convertToCurrency('AUD')}>AUD</button>
      </div>
    </div>
  );
}

export default App;
