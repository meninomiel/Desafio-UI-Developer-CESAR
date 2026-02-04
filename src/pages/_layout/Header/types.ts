export interface HeaderProps {
  /** Logo ou título da aplicação */
  brandTitle?: string;
  
  /** Ações do usuário (avatar, notificações, etc.) */
  actions?: React.ReactNode;
  
  /** Navegação secundária */
  nav?: React.ReactNode;
}
