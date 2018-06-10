import * as React from 'react';
import { Summary } from './components/summary';
// import { Introduction } from './components/introduction';

class App extends React.Component <any, any> {
  /* tslint:disable */
  public state = {renderedComponent: <Summary onClick={() => this.onClickIntroduction} passou={'a'}/>}
  /* tslint:enable */
  public render() {

    return (
      <React.Fragment>
        {this.state.renderedComponent}
      </React.Fragment>
    );
  }

  public onClickIntroduction = () => {
    console.log('cliclou');
    // this.setState({renderedComponent: <Introduction/>})
  }

}

export default App;
