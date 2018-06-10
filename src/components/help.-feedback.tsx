import * as React from 'react';
import { TitleText, StandardMiddleText, Img } from '../App.style';
import logo from '../assets/logo.png';


interface IHelpFeedbackProps{
  percentage: number
}

export class HelpFeedback extends React.Component <IHelpFeedbackProps, any> {

  public render() {

    return (
      <React.Fragment>
        <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
          <img style={{padding: "20px"}}src={logo}/>
          {this.props.percentage           
          <div></div>}
        </div>
      </React.Fragment>
    );
  }

}
