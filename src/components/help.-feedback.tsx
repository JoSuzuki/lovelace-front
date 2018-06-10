import * as React from 'react';
import { TitleText, StandardMiddleText } from '../App.style';

export class HelpFeedback extends React.Component <any, any> {

  public render() {

    return (
      <React.Fragment>
        <div className="row">
        <TitleText>{"Parece que você tem alguns problemas em sua graduação ):"}
        </TitleText>
        <StandardMiddleText>{"Mas, não se preocupe, você não é o único"}
        </StandardMiddleText>   
        <StandardMiddleText>{"Auxilio"}
        </StandardMiddleText>   
        </div>
      </React.Fragment>
    );
  }

}
