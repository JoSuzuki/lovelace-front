import * as React from 'react';
import { RadioContainer, RadioInput, CheckMark } from './radio.style';

interface IRadioProps {
  radioOptions: string[];
  changeSelectOptions: (selected: number) => void;
  vertical?: boolean;
}

interface IRadioState {
  selectedOption: number;
}

export class Radio extends React.Component <IRadioProps, IRadioState> {
  constructor(props: any) {
    super(props);
    this.state = {selectedOption: 0};
  }

  
  public render() {

    return (
      <React.Fragment>
        <div 
          style={{
            display: 'flex', 
            flexDirection: this.props.vertical ? 'column' : 'row',
            justifyContent: 'space-around', 
            padding: '20px'
          }}
        >
        {this.props.radioOptions.map((radio, index) => {
          return(
          <RadioContainer key={'radio'+ radio + index}>{radio}
            <RadioInput 
              type={'radio'}
              value={index}
              checked={this.state.selectedOption === index}
              onChange={this.handleOptionChange}
            />
            <CheckMark checked={this.state.selectedOption === index}/>
          </RadioContainer>
          )
        })}
        </div>
      </React.Fragment>
    );
  }

  public handleOptionChange = (changeEvent: any) => {
    this.props.changeSelectOptions(Number(changeEvent.target.value));
    this.setState({selectedOption: Number(changeEvent.target.value)})
  }
}
