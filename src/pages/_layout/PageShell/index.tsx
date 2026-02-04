import React from 'react';
import type { PageShellProps } from './types';
import { Shell, Main, HeaderSlot, FooterSlot } from './styles';
import { Header } from '../Header';

export const PageShell: React.FC<PageShellProps> = ({
  children,
  header = <Header />,
  footer = "2022 ACME. All rights reserved.",
}) => (
  <Shell>
    {header && <HeaderSlot>{header}</HeaderSlot>}
    <Main>{children}</Main>
    {footer && <FooterSlot>{footer}</FooterSlot>}
  </Shell>
);

export type { PageShellProps } from './types';
export default PageShell;
