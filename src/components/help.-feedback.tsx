import * as React from 'react';
import logo from '../assets/logo.png';


interface IHelpFeedbackProps{
  percentage: number
}

export class HelpFeedback extends React.Component <IHelpFeedbackProps, any> {

  public render() {

    return (
      <React.Fragment>
        <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
          <img style={{padding: "50px", width:'150px', height: "auto", alignSelf: "center"}}src={logo}/>
          <div style={{alignSelf: "center"}}>A sua chance de largar é: {this.props.percentage*100}%</div>
          {this.props.percentage > 0.5 ?
          <React.Fragment>
          <div style={{display: "flex", alignSelf: 'center', paddingTop: '20px'}}>
              Constatamos que você pode necessitar de auxílio nas áreas...
          </div> 
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Emocionais:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Procure a Frente Universitária de Saúde Mental (FUSM): Contatos:</li>
            <li>Workshop com profissionais da saúde. Links: </li>
            <li>Indicação de profissionais. Links:</li>
          </ul>
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Financeiros:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Bolsas de permanência disponíveis:</li>
            <li>Projetos remunerados da USP:</li>
            <li>Contato do SAS - Serviço de Assistência Social</li>
          </ul>
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Acadêmico:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Agendamento de aulas de reforço: Links:</li>
          </ul>
          </React.Fragment>
          :
          <div style={{alignSelf: 'center'}}>
            Obrigado, seus dados nos ajudarão em pesquisas futuras!
          </div>
        }
        </div>
      </React.Fragment>
    );
  }

}
