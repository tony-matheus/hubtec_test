import styled from 'styled-components';

const Options = styled.div`
  //display: inline-flex;
  display: ${props => props.hide ? "none" : "unset"} !important;
`;

export default Options;
