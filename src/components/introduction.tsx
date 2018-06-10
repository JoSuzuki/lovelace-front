import * as React from 'react';
import {ItalicText, Button, StandardRightText, Img } from '../App.style';
import logo from '../assets/logo.png';

interface IIntroductionProps {
    onClick: () => void;
}

export class Introduction extends React.Component <IIntroductionProps, any> {
  
  public render() {

    return (
      <React.Fragment>
        <div className="row">
          <Img src={logo}/>
        </div>
        <div className="col-12-sm">
            <div className="row">
                <div style={{display:"flex", flexDirection: "column"}}>
                    <div style={{fontSize: 40, marginLeft: "50px", marginBottom: "50px"}}>Ajuda</div>
                    <div style={{display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <ItalicText>{" \"Talvez o problema não seja você, as vezes é difícil seguir em frente \nMas se você se sente assim, saiba que você não está sozinho e que há solução\""}</ItalicText>                                                                 
                        <StandardRightText>Criamos um formulário para compreender melhor estas dificuldades e proporcionar
                            auxílio de uma forma humana e simples.
                        </StandardRightText> 
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={this.props.onClick} className="btn btn-info" role="button">Abrir Formulário</Button>
      </React.Fragment>
    );
  }

}
