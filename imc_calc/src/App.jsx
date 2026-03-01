// importando os dados para a aplicação (JSON)
import { data } from "./data/data.js";

// React Hooks 
import { useState } from 'react'

// Componentes importados para a aplicação principal App.jsx
import ImcCalc from './components/ImcCalcForm/ImcCalc'

import ImcTable from "./components/ImcTable/ImcTable"

// Componente do ToastNotify
import { ToastContainer, toast } from 'react-toastify';

// CSS do App.jsx
import './App.css'

function App() {

  const notifyErrorTypeInput = () => toast.error('Tipos de dados incompatíveis! Insira apenas números decimais.');
  const notifyErrorIMCScale = () => toast.error('Faixa de IMC não encontrada!');

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    // Avalia se há dados nos valores dos campos de entrada
    if(!weight || !height) {
      notifyErrorTypeInput();
      return;
    }

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");
    
    // Avalia se são números após conversão com a regex e o uso da função replace().
    if(isNaN(weightFloat) || isNaN(heightFloat)) {
      notifyErrorTypeInput();
      return;
    }
    
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max)
      {
        setInfo(item.info)
        setInfoClass(item.infoClass);
      }
    });

    if(info === " " || info === null || info === undefined) {
      notifyErrorIMCScale();
      return;
    }
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <ToastContainer />
      <div 
        id="app-container" 
        className={
        imc 
        ? "table-container" 
        : "form-container"}
      >
        {
          !imc 
        ? <ImcCalc calcImc={calcImc} />
        : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
        }
      </div>
    </>
  )
}

export default App;