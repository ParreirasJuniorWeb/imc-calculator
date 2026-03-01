import "./Buttons.css"

const Buttons = ( {id, text, action} ) => {

  const handleActionBtns = (e) => {
    action(e);
  };
  // Maior flexibilidade para o componente do botão para executar
  // a função independentemente do tipo de cada função 
  // Como se fosseu um filtro de execução de funções em um único 
  // componente React
  
  return (
    <button 
      id={id}
      onClick={handleActionBtns}
    >{text}</button>
  )
}

export default Buttons;