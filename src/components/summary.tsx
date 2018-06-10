import * as React from 'react';
import { Button, CardWrapper } from '../App.style';
import logo from '../assets/logo.png';

interface ISummaryProps {
    onClick: () => void;
}

export class Summary extends React.Component <ISummaryProps, any> {
  
  public render() {

    return (
      <React.Fragment>
        <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
          <img style={{padding: "50px", width:'150px', height: "auto", alignSelf: "center"}}src={logo}/>

          <CardWrapper>

            <div style={{alignSelf: 'center', fontSize: '30px', padding: '20px', paddingTop: '35px'}}>
              Na graduação passamos por momentos difíceis
            </div>
            <div style={{alignSelf: 'center', fontSize: '20px', padding: '20px', width: '90%', textJustify: 'auto', textAlign: 'justify'}}>
              Lovelace busca auxiliar universitários com dificuldades de qualquer natureza na graduação. O formulário a seguir é completamente anônimo e visa coletar dados para auxiliar alunos de forma individual e coletiva para resolver problemas emocionais, acadêmicos e financeiros dos universitários. Mesmo para aqueles que não consideram ter grandes problemas na graduação, a sua participação nessa iniciativa nos ajuda a ajudar quem mais precisa.
            </div>
            <div className="col-sm-12" style={{alignSelf: 'center', padding: '20px'}}>
              <Button onClick={this.props.onClick}className="btn btn-info" role="button">AJUDA</Button>
            </div>
          </CardWrapper>
          
        </div>
      </React.Fragment>
    );
  }

}
