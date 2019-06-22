import React from 'react';
import { Container } from 'react-materialize';
import HeaderContainer from '../../containers/HeaderContainer';

const MainLayout = (props) => (
  <div>
    <HeaderContainer />
    <Container>
      { props.children }
    </Container>
  </div>
);

export default MainLayout;