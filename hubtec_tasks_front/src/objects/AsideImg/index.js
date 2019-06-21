import styled from 'styled-components';

const AsideImg = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
    height: 100% ;
    width: ${props => props.active ? "50%" : "30%"};
    background-color: #66DAC7;
`;

export default AsideImg;
