import * as React from 'react';

export class Introduction extends React.Component <any, any> {
  
  public render() {

    return (
      <React.Fragment>
        <div className="row">
            <div className="col-6-xs">
                <text>Ajuda</text>
                <text>"Talvez o problema não seja você, as vezes é difícil seguir em frente"
                </text>
                <text>Mas se você se sente assim, saiba que você não está sozinho e que há solução</text>                
            </div>
            <div className="col-6-xs">
                <text>Criamos um formulário para compreender melhor estas dificuldades e proporcionar
                    auxílio de uma forma humana e simples.
                </text>
                <button className="btn btn-info" role="button">Abrir Formulário</button>
            </div>
        </div>
      </React.Fragment>
    );
  }

}
