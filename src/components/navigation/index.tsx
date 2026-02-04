import React from 'react';
import type { NavigationProps } from './types';
import { NavList, NavItem } from './styles';

export const Navigation: React.FC<NavigationProps> = ({
  items,
  activeItem = items[0]?.label || '',
}) => {
  return (
    <NavList role="navigation" aria-label="Navegação principal">
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
    </NavList>
  );
};

export type { NavigationProps, NavigationItem } from './types';
export { NavList, NavItem } from './styles'; 
export default Navigation;