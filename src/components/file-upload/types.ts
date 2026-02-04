export type FileUploadVariant = 'default' | 'hover' | 'dragging' | 'success' | 'error';

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export interface FileUploadProps {
  /** Label do campo */
  label: string;
  
  /** ID único */
  id: string;
  
  /** Callback quando arquivo é selecionado */
  onFileSelect?: (file: File) => void;
  
  /** Callback quando arquivo é removido */
  onFileRemove?: () => void;

  /** Arquivo enviado */
  file?: File | null;
  
  /** Tipos permitidos */
  acceptedTypes?: string[];
  
  /** Tamanho máximo em MB */
  maxSizeMB?: number;
  
  /** Helper text */
  helperText?: string;
  
  /** Estado visual */
  variant?: FileUploadVariant;
  
  /** Required */
  required?: boolean;
}
