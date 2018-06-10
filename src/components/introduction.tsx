import * as React from 'react';
import { StandardText, ItalicText, Button } from '../App.style';

interface IIntroductionProps {
    onClick: () => void;
}

export class Introduction extends React.Component <IIntroductionProps, any> {
  
  public render() {

    return (
      <React.Fragment>
        <div className="row">
            <div className="col-sm-6">
                <StandardText>{"Ajuda \n\n\n"}</StandardText>
                <ItalicText>{" \"Talvez o problema não seja você, as vezes é difícil seguir em frente \nMas se você se sente assim, saiba que você não está sozinho e que há solução\""}</ItalicText>
            </div>
            <div className="col-sm-6">
                <StandardText>Criamos um formulário para compreender melhor estas dificuldades e proporcionar
                    auxílio de uma forma humana e simples.
                </StandardText>
                <Button onClick={this.props.onClick} className="btn btn-info" role="button">Abrir Formulário</Button>
            </div>
        </div>
      </React.Fragment>
    );
  }

}
