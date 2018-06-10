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
          {this.props.percentage > 0.5 ?
          <React.Fragment>
          <div style={{display: "flex", alignSelf: 'center', paddingTop: '20px'}}>
              Constatamos que você pode necessitar de auxílio nas áreas...
          </div> 
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Emocionais:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Parceria com Frente Universitária de Saúde Mental (FUSM)</li>
            <li>Workshop com profissionais da saúde</li>
            <li>Indicação de profissionais</li>
          </ul>
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Financeiros:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Indicação de bolsas de permanência</li>
            <li>Parceria com institutos para indicação de projetos na USP com bolsas.</li>
            <li>Santander é parceiro da USP, fornece bolsas de auxílio - Possibilidade</li>
            <li>SAS - Serviço de Assistência Social</li>
            <li>Parceria com a AEP</li>
          </ul>
          <div style={{display: "flex", fontSize: '40px', marginLeft: '50px'}}>
            Acadêmico:
          </div>
          <ul style={{fontSize: '20px'}}>
            <li>Agendar aulas de reforços com os monitores e professores</li>
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
