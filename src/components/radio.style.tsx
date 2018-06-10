import styled from 'styled-components';

interface ICheckMarkProps {
  checked: boolean;
}

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${(props: ICheckMarkProps) => props.checked ? '#4b94f7' : '#eee'};
  border-radius: 50%;
  transition: 0.2s ease;
  :after {
    content: '';
    position: absolute;
    display: ${(props: ICheckMarkProps) => props.checked ? 'block' : 'none'};
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const RadioContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & > ${CheckMark}:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
