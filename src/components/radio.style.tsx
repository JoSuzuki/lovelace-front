import styled from 'styled-components';

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

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ ${RadioSpan} {
    background-color: #2196F3;
  }
`;
