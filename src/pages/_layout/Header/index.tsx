import React from 'react';
import type { HeaderProps } from './types';
import { Wrapper, Container, Brand, Nav, Actions } from './styles';

export const Header: React.FC<HeaderProps> = ({
  brandTitle = 'acme.corp',
  nav,
  actions,
}) => (
  <Wrapper>
    <Container>
      <Brand>{brandTitle}</Brand>
      {nav && <Nav>{nav}</Nav>}
      {actions && <Actions>{actions}</Actions>}
    </Container>
  </Wrapper>
);

export type { HeaderProps } from './types';
export default Header;