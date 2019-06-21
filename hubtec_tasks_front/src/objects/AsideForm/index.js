import styled from 'styled-components';

const AsideForm = styled.div`
    @media (max-width: 700px) {
      width: 100%;
    }
    @media (min-width: 700px) {
      width: ${props => props.active ? "50%" : "70%"};
    }
    height: 100%;
    
    background-color: var(--color-first);
    padding: 25px 40px;
    overflow: auto;
`;

export default AsideForm;
