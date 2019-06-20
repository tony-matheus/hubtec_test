import styled from 'styled-components';

const InvisibleButton = styled.button`
  //background-color: ${props => props.primary ? "#52C4B9" : "#5b5b5b"};
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  border: solid 1px black;
  text-align: center;
  line-height: 10px;

  display: ${props => props.hide ? "none" : "unset"} !important;
  &:hover {
        background-color: var(--color-first);
        color: var(--color-zero);
        border: 1px solid var(--color-zero);
    }

`;

export default InvisibleButton;
