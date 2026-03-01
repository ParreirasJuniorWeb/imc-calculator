// CSS do componente específico
import "./ImcTable.css";

// importando outros componentes que serão usados neste 
import Button from "../Buttons/Buttons"

const ImcTable = ( { data, imc, info, infoClass, resetCalc } ) => {

const UserDescriptionImc = () => {
  return data.filter((item) => item.info === info)[0];           
}; 

const filterIMCUserArray = [UserDescriptionImc()];

  return (
    <div id="result-container">
      <h1 id="titleImc">Seu IMC: 
        <span id="imc-number" className={infoClass}>{imc}</span>
      </h1>
      <h2 id="subTitleImc">Situação atual: 
        <span id="imc-info" className={infoClass}>{info}</span>
      </h2>
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
      </div>
      <div className="table-body">
        {
          data.map((item) => {
            // Filtar os dados do IMC do usuário e aplicar a classe na faixa correta:
            return filterIMCUserArray[0]?.info === item.info ? (
              <div className="table-data" key={item.info}>
                <p className={`classification ${filterIMCUserArray[0].infoClass}`}>{item.classification}</p>
                <p className={`info ${filterIMCUserArray[0].infoClass}`}>{item.info}</p>
                <p className={`obesity ${filterIMCUserArray[0].infoClass}`}>{item.obesity}</p>
              </div>
            ) : (
              <div className="table-data" key={item.info}>
                <p className="classification">{item.classification}</p>
                <p className="info">{item.info}</p>
                <p className="obesity">{item.obesity}</p>
              </div>
            );
          })
        }
      </div>
      <Button id="back-btn" text="Voltar" action={resetCalc} /> 
    </div>
  )
}

export default ImcTable;