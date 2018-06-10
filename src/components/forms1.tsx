import * as React from 'react';

interface IForm1Props {
    onClick: () => void;
}

export class Form1 extends React.Component <IForm1Props, any> {

  public render() {

    return (
      <React.Fragment>
        <form>            
            <div className="row">
                <div className="col-3-xs">
                    <label>Gênero
                    <select id="gender" name="gender">
                        <option value="">Selecione...</option>
                        <option value="Homem">Homem</option>
                        <option value="Mulher">Mulher</option>
                        <option value="Outros">Outros</option>
                        </select>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual o seu curso?
                        <input name="course" id="course"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Já desistiu de algum curso?
                        <input name="courseGiveUp" id="courseGiveUp"/>
                    </label>
                </div>
                <div className="col-3-xs">
                    <label>Qual sua média na faculdade?
                        <input name="average" id="average"/>
                    </label>
                </div>
                <button onClick={this.props.onClick} className="btn btn-info" role="button">Prosseguir</button>
            </div>
        </form>
      </React.Fragment>
    );
  }

}
