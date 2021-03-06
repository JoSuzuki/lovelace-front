import * as React from 'react';
import { Summary } from './components/summary';
import { Introduction } from './components/introduction';
import { Form1 } from './components/forms1';
import { HelpFeedback } from './components/help.-feedback';

class App extends React.Component <any, any> {
  // seta o estado inicial para uma div vazia
  public state = {renderedComponent: <div/>}

  constructor(props: any) {
    super(props)
    this.state={renderedComponent: <Summary onClick={(this.onClickIntroduction)} />}
  }

  public render() {

    return (
      <React.Fragment>
        {this.state.renderedComponent}
      </React.Fragment>
    );
  }

  public onClickIntroduction = () => {
    this.setState({renderedComponent: <Introduction onClick={this.onClickForm1}/>})
  }

  public onClickForm1 = () => {
    this.setState({renderedComponent: <Form1 onClick={this.onClickHelpFeedback} />})
  }

  public onClickHelpFeedback = (percentage: number) => {
    this.setState({renderedComponent: <HelpFeedback percentage={percentage}/>})
  }

}

export default App;