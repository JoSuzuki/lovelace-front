import styled, { keyframes } from 'styled-components';

export const RadioSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  :after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const RadioContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Button = styled.button`
  background-color: white;
  text-align: center;
  margin: auto;
  width: 140px;
  height: 50px;
  font-size: larger;
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  border: solid 0px;
  transition-duration: 0.4s;
  background: linear-gradient(180deg, #000000 5%, #000000 100%);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  :hover {
    box-shadow: 0 6px 20px 0 rgba(0,0,0,0.2), 0 0px 0px 0 rgba(0,0,0,0.19);;
  }
  :active {
      position: relative;
      top: 1px;
  }
`;

export const TitleText = styled.text`
  background-color: white;
  margin-top: 50px;
  margin-left: 300px;
  margin-bottom:50px;
  font-size: 30px;
  display:inline-block;
  font: Helvetica;
  color: #000000;
`;

export const StandardMiddleText = styled.text`
  background-color: white;
  font-size: 20px;
  margin-left:300px;
  width:50%;
  font: Helvetica;
  display:inline-block;
  color: #000000;
  text-align: justify;
  text-justify: inter-word;
`;

export const StandardLeftText = styled.text`
  background-color: white;
  font-size: 30px;
  margin-left: 150px;
  width:50%;
  font: Helvetica;
  display:inline-block;
  color: #000000;
`;

export const StandardRightText = styled.text`
  background-color: white;
  font-size: 20px;
  width:40%;
  font: Helvetica;
  color: #000000;
`;

export const Img = styled.img`
  height:auto;
  margin-left:550px;
  width:150px;
`;


export const ItalicText = styled.text`
  background-color: white;
  font-size: 20px;
  font: Helvetica;
  width:40%;
  color: #000000;
  font-style: italic;
`;

const dropIn = keyframes`
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  align-self: center; 
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color:gray;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  animation: ${dropIn} 0.8s ease-out;
`;
