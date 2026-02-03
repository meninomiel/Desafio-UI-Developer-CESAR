import React, { useState } from 'react';
import type { HeaderProps } from './types';
import { Wrapper, Container, Brand, Actions } from './styles';
import Navigation from '../../../components/navigation';
import { NotificationBell } from '../../../components/notification';
import { UserAccount } from '../../../components/user-account';
import { MobileMenuButton, MobileOverlayMenu } from '../../../components/mobile-menu';

/** Links a serem exibidos no menu principal. */
const MENU_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Register', href: '/register' },
  { label: 'About', href: '#' },
];

export const Header: React.FC<HeaderProps> = ({
  brandTitle = 'acme.corp',
}) => {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Brand>{brandTitle}</Brand>
        <Navigation items={MENU_ITEMS} activeItem="Register" />
        <Actions>
          <NotificationBell unreadCount={3} />
          <UserAccount name="Juliana" avatarUrl='src/assets/img/Avatar.png' />
        </Actions>
        <MobileMenuButton
            open={mobileOpen}
            onToggle={() => setMobileOpen(!mobileOpen)}
          />
        <MobileOverlayMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)} 
          items={MENU_ITEMS} 
          activeItem="Register" 
        />
      </Container>
    </Wrapper>
  )
};

export type { HeaderProps } from './types';
export default Header;