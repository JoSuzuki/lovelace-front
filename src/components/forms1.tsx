import * as React from 'react';
import { Radio } from './radio.component';
import axios from 'axios';

interface IForm1Props {
    onClick?: () => void;
}

interface IForm1State {
    gender: number;
    course: string;
    average: number;
    courseSatisfaction: number;
    lifeSatisfaction: number;
    courseExpectation: number;
    pressionedByFriends: number;
    chooseRightCourse: number;
    financialDifficult: number;
    extracurricularActivity: number;
}

export class Form1 extends React.Component <IForm1Props, IForm1State> {


    // public formAnswer1: string[];

    // public handleSelect($event: any, index: number){
    //     this.formAnswer1[index] = $event.value;
    // }

  public render() {

    return (
      <React.Fragment>
            <div className="row">
                <div className="col-3-xs">
                    <label>Gênero
                    <Radio
                        radioOptions={['Homem', 'Mulher', 'Outro']}
                        changeSelectOptions={this.handleSelectGender}
                        vertical={true}
                    />
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu curso?
                        <input name="course" id="course"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual sua média na faculdade?
                        <Radio
                            radioOptions={[
                                'De 0.0 a 0.5',
                                'De 0.5 a 1.0',
                                'De 1.0 a 1.5',
                                'De 1.5 a 2.0',
                                'De 2.0 a 2.5',
                                'De 2.5 a 3.0',
                                'De 3.0 a 3.5',
                                'De 3.5 a 4.0',
                                'De 4.0 a 4.5',
                                'De 4.5 a 5.0',
                                'De 5.0 a 5.5',
                                'De 5.5 a 6.0',
                                'De 6.0 a 6.5',
                                'De 6.5 a 7.0',
                                'De 7.0 a 7.5',
                                'De 7.5 a 8.0',
                                'De 8.0 a 8.5',
                                'De 8.5 a 9.0',
                                'De 9.0 a 9.5',
                                'De 9.5 a 10.0',  
                            ]}
                            changeSelectOptions={this.handleSelectAverage}
                            vertical={true}
                        />                    
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com o curso?
                        <Radio
                            radioOptions={['1', '2', '3', '4', '5']}
                            changeSelectOptions={this.handleSelectCourseSatisfaction}
                        />
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu nível de satisfação com a vida em geral?
                        <Radio
                            radioOptions={['1', '2', '3', '4', '5']}
                            changeSelectOptions={this.handleSelectLifeSatisfaction}
                        />
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>O Curso atendeu as suas expectativas?
                        <Radio
                            radioOptions={['Não', 'Sim']}
                            changeSelectOptions={this.handleSelectCourseExpectation}
                            vertical={true}
                        />
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você se sentiu pressionado a escolher o seu curso (pais, família, amigos,...) ?
                        <Radio
                            radioOptions={['Não', 'Sim']}
                            changeSelectOptions={this.handleSelectPressionedByFriends}
                            vertical={true}
                        />
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você acha que escolheu o curso certo para você?
                        <Radio
                            radioOptions={['Não', 'Sim']}
                            changeSelectOptions={this.handleSelectChooseRightCourse}
                            vertical={true}
                        />                    
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você tem dificuldade financeira para continuar o seu curso? 
                        <Radio
                            radioOptions={['Não', 'Sim']}
                            changeSelectOptions={this.handleSelectFinancialDifficulty}
                            vertical={true}
                        />                      
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Você faz alguma atividade extracurricular atrelada ou não a universidade? (Grupos de extensão, atlética, grêmio, IC, esportes, outros hobbies...)
                        <Radio
                            radioOptions={['Não', 'Sim']}
                            changeSelectOptions={this.handleSelectExtracurricularActivity}
                            vertical={true}
                        />                    
                    </label>
                </div>
                <button onClick={this.handleSendData}>Prosseguir</button>
         </div>
      </React.Fragment>
    );
  }

  public handleSelectGender = (selection: number) => {
    console.log(this.state);
    this.setState({gender: selection});
  }

  public handleSelectAverage = (selection: number) => {
    this.setState({average: selection});
  }

  public handleSelectCourseSatisfaction = (selection: number) => {
    this.setState({courseSatisfaction: selection});
  }

  public handleSelectLifeSatisfaction = (selection: number) => {
    this.setState({lifeSatisfaction: selection});
  }

  public handleSelectCourseExpectation = (selection: number) => {
    this.setState({courseExpectation: selection});
  }

  public handleSelectPressionedByFriends = (selection: number) => {
    this.setState({pressionedByFriends: selection});
  }

  public handleSelectChooseRightCourse = (selection: number) => {
    this.setState({chooseRightCourse: selection});
  }

  public handleSelectFinancialDifficulty = (selection: number) => {
    this.setState({financialDifficult: selection});
  }

  public handleSelectExtracurricularActivity = (selection: number) => {
    this.setState({extracurricularActivity: selection});
  }

  public handleSendData = () => {
    this.setState(this.state, () => {
        console.log(this.state);
        axios.get('https://lovelace.localtunnel.me/getjson/', {
            params: {
                ...this.state
            }
        })
        .then(response => {
          console.log(response);
        //   this.setState({text: JSON.stringify(response.data)});
        })
        .catch(error => console.warn(error));
    })
  }

}
