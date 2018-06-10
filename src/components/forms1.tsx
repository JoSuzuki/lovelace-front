import * as React from 'react';

interface IForm1Props {
    onClick: () => void;
}

export class Form1 extends React.Component <IForm1Props, any> {


    public formAnswer1: string[];

    public handleSelect($event: any, index: number){
        this.formAnswer1[index] = $event.value;
    }

  public render() {

    return (
      <React.Fragment>
        <form>            
            {/*<div className="row">
                <div className="col-3-xs">
                    <label>Gênero
                    <select onChange="handleSelectSatisfaction($event, 0)" id="gender" name="gender">
                        <option value="">Selecione...</option>
                        <option value="Homem">Homem</option>
                        <option value="Mulher">Mulher</option>
                        <option value="Outros">Outros</option>
                        </select>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu curso?
                        <input onChange="handleSelectSatisfaction($event, 1)" name="course" id="course"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Já desistiu de algum curso?
                        <input onChange="handleSelectSatisfaction($event, 2)" name="courseGiveUp" id="courseGiveUp"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual sua média na faculdade?
                        <input onChange="handleSelectSatisfaction($event, 3)" name="average" id="average"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com o curso?
                        <input onChange="handleSelectSatisfaction($event, 4)" name="courseHappiness" id="courseHappiness"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com a vida em geral?
                        <input onChange="handleSelectSatisfaction($event, 5)" name="happiness" id="happiness"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>O Curso atendeu as suas expectativas?
                        <input onChange="handleSelectSatisfaction($event, 6)" name="expectation" id="expectation"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você se sentiu pressionado a escolher o seu curso (pais, família, amigos,...) ?
                        <input onChange="handleSelectSatisfaction($event, 7)" name="pressure" id="pressure"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você acha que escolheu o curso certo para você?
                        <input onChange="handleSelectSatisfaction($event, 8)" name="choice" id="choice"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você acha que escolheu o curso certo para você?
                        <input onChange="handleSelectSatisfaction($event, 9)" name="choice" id="choice"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você tem dificuldade financeira para continuar o seu curso? 
                        <input onChange="handleSelectSatisfaction($event, 10)" name="finantialDificulty" id="finantialDificulty"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você faz alguma atividade extracurricular atrelada ou não a universidade? (Grupos de extensão, atlética, grêmio, IC, esportes, outros hobbies...)
                        <input onChange="handleSelectSatisfaction($event, 11)" name="activities" id="activities"/>
                    </label>
    </div>
                <button onClick={this.props.onClick} className="btn btn-info" role="button">Prosseguir</button>
    </div>*/}
    </form>
      </React.Fragment>
    );
  }

}
