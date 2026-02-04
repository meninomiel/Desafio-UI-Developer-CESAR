export interface UserAccountProps {
  /** Nome do usuário */
  name: string;
  
  /** Avatar do usuário (URL ou initial) */
  avatarUrl?: string;
  
  /** Dropdown aberto */
  open?: boolean;
}
