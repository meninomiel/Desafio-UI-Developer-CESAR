import React from 'react';
import type { MobileMenuButtonProps, MobileOverlayMenuProps } from './types';
import { Button, Overlay, 
  MenuPanel,
  MenuHeader,
  AccountInfo,
  AccountMenu,
  NavListMobile,
  PanelContent,
  LogoutMenuItem, 
  } from './styles';
import HAMBURGUER_MENU_ICON from '../../assets/icons/HamburguerMenu';
import UserAccount from '../user-account';
import NotificationBell from '../notification';
import { NavItem } from '../navigation/styles';

const ACCOUNT_MENU_ITEMS = [
  { label: 'My Account', href: '#' },
  { label: 'My Applications', href: '#' },
];

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  open,
  onToggle,
}) => (
  <Button
    open={open}
    type="button"
    onClick={onToggle}
    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
    aria-expanded={open}
  >
    {HAMBURGUER_MENU_ICON}
  </Button>
);

export const MobileOverlayMenu: React.FC<MobileOverlayMenuProps> = ({
  open,
  onClose,
  items,
  activeItem = items[0]?.label || '',
}) => (
  <>
    <MenuPanel open={open} role="dialog" aria-modal="true" aria-label="Menu principal">
        <MenuHeader>
          <AccountInfo>
            <UserAccount name='Juliana' avatarUrl='src/assets/img/Avatar.png' />
            <NotificationBell unreadCount={3} />
          </AccountInfo>
          <AccountMenu>
            {ACCOUNT_MENU_ITEMS.map(({ label, href}) => (
              <NavItem
                key={href}
                href={href}
                active={false}
                aria-current={undefined}
              >
                {label}
              </NavItem>
              ))}
          </AccountMenu>
        </MenuHeader>
        <NavListMobile role="navigation" aria-label="Navegação principal">
          {items.map(({ label, href, active = label === activeItem }) => (
            <NavItem
              key={href}
              href={href}
              active={active}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </NavItem>
          ))}
        </NavListMobile>
        <PanelContent>
          <LogoutMenuItem>
            <NavItem
              href="#"
              active={false}
              aria-current={undefined}
            >
              Logout
            </NavItem>
          </LogoutMenuItem>
        </PanelContent>
    </MenuPanel>
    <Overlay open={open} onClick={onClose} aria-hidden />
  </>
);
