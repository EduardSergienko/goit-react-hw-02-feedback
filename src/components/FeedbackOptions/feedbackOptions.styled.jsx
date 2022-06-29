import styled from 'styled-components';

export const OprionList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Optionbtn = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: transparent;
  border-radius: 5px;
  transition: transform 150ms;
  :hover {
    color: white;
    background-color: grey;
    transform: scale(1.1);
  }
`;
