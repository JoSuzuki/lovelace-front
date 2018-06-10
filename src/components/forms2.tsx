import * as React from 'react';

export class Form2 extends React.Component <any, any> {

  public render() {

    return (
      <React.Fragment>
        <form>            
            <div className="row">
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com o curso?
                        <input name="courseHappiness" id="courseHappiness"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com a vida em geral?
                        <input name="happiness" id="happiness"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>O Curso atendeu as suas expectativas? Você se sentiu pressionado a escolher o seu curso (pais, família, amigos,...) 
                        <input name="expectation" id="expectation"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você se sentiu pressionado a escolher o seu curso (pais, família, amigos,...) ?
                        <input name="pressure" id="pressure"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você acha que escolheu o curso certo para você?
                        <input name="choice" id="choice"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você acha que escolheu o curso certo para você? Você tem dificuldade financeira para continuar o seu curso? 
                        <input name="choice" id="choice"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você tem dificuldade financeira para continuar o seu curso? 
                        <input name="finantialDificulty" id="finantialDificulty"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você faz alguma atividade extracurricular atrelada ou não a universidade? (Grupos de extensão, atlética, grêmio, IC, esportes, outros hobbies...)
                        <input name="activities" id="activities"/>
                    </label>
                </div>
                <button onClick={this.props.onClick} className="btn btn-info" role="button">Finalizar</button>
            </div>
        </form>
      </React.Fragment>
    );
  }

}
