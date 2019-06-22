import styled from 'styled-components';

const ViewData = styled.div`
    display: ${props => props.hide ? "none" : "unset"} !important;
`;

const EditData = styled.div`
    display: ${props => props.hide ? "unset" : "none"} !important;
`;

const BreakText = styled.div`
  word-wrap: break-word;
`;

const Scroll = styled.div`
  height: 0;
  overflow-x: visible!important;
  ${props => props.center ? 'margin: auto' : ''}
`;

const ContainerInline = styled.div`
  display: flex;
`;


export {ViewData, EditData, BreakText, Scroll, ContainerInline}
