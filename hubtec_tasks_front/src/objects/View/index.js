import styled from 'styled-components';

const ViewData = styled.div`
    display: ${props => props.hide ? "none" : "unset"} !important;
`;

const EditData = styled.div`
    display: ${props => props.hide ? "unset" : "none"} !important;
`;

export {ViewData, EditData}
