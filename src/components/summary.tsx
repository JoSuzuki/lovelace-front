import * as React from 'react';
import {StandardText, TitleText} from '../App.style'

interface ISummaryProps {
    onClick: () => void;
}

export class Summary extends React.Component <ISummaryProps, any> {
  
  public render() {

    return (
      <React.Fragment>
        <div className="row">
            <div className="col-12-xs">
                <TitleText>A vida de universitários tem muitos momentos difíceis
                </TitleText>
                <StandardText>Lovelace busca auxiliar universitários com dificuldades de qualquer natureza na graduação. O formulário a seguir é completamente anônimo e visa coletar dados para auxiliar alunos de forma individual e coletiva para resolver problemas emocionais, acadêmicos e financeiros dos universitários. Mesmo para aqueles que não consideram ter grandes problemas na graduação, a sua participação nessa iniciativa nos ajuda a ajudar quem mais precisa.
                </StandardText>
                <button onClick={this.props.onClick}className="btn btn-info" role="button">AJUDA</button>
            </div>
        </div>
      </React.Fragment>
    );
  }

}
