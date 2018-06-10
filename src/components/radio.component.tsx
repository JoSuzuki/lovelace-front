import * as React from 'react';
import { RadioContainer, RadioInput, RadioSpan } from './radio.style';

export class Radio extends React.Component <any, any> {
  public state={textFromServer: 'carregando'};
  
  public componentDidMount() {
    // axios.get('https://lovelace.localtunnel.me/getjson/')
    // .then(response => {
    //   console.log(response);
    //   this.setState({textFromServer: JSON.stringify(response.data)});
    // })
    // .catch(error => console.warn(error));
  }
  
  public render() {

    return (
      <React.Fragment>
        <div style={{textAlign: 'center', paddingTop: 100}}>
          <RadioContainer>
            <RadioInput type={'radio'}/>
            {/*tslint:disable-next-line:jsx-self-close*/}
            <RadioSpan></RadioSpan>
          </RadioContainer>
        </div>
      </React.Fragment>
    );
  }

}
