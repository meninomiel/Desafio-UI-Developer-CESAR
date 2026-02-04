/**
 * Estrutura base das páginas do sistema.
 */
export interface PageShellProps {
  /** Conteúdo principal da página */
  children: React.ReactNode;
  
  /** Header customizável (opcional) */
  header?: React.ReactNode;
  
  /** Footer customizável (opcional) */
  footer?: React.ReactNode;
}
