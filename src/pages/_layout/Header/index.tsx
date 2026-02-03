import React from 'react';
import type { HeaderProps } from './types';
import { Wrapper, Container, Brand, Actions } from './styles';
import Navigation from '../../../components/navigation';

/** Links a serem exibidos no menu principal. */
const MENU_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Register', href: '/register' },
  { label: 'About', href: '#' },
];

export const Header: React.FC<HeaderProps> = ({
  brandTitle = 'acme.corp',
  actions,
}) => (
  <Wrapper>
    <Container>
      <Brand>{brandTitle}</Brand>
      <Navigation items={MENU_ITEMS} activeItem="Register" />
      {actions && <Actions>{actions}</Actions>}
    </Container>
  </Wrapper>
);

export type { HeaderProps } from './types';
export default Header;