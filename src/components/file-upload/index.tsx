import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Label, HelperText, LabelWrapper } from '../input/styles';
import type { FileUploadProps, FileUploadVariant } from './types';
import {
  DropZone,
  HiddenInput,
  UploadIcon,
  FilePreview,
  FileInfo,
  FileName,
  FileType,
  RemoveButton,
  FileUploadWrapper,
  FileMeta,
} from './styles';
import CHECKMARK_ICON from '../../assets/icons/Checkmark';
import UPLOAD_CLOUD_ICON from '../../assets/icons/UploadCloud';
import FILE_ICON from '../../assets/icons/File';

const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx', '.odt']; // tipos permitidos por padrão
const MAX_SIZE_MB = 5; // tamanho máximo padrão em MB

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  id,
  file = null,
  onFileSelect,
  onFileRemove,
  acceptedTypes = ACCEPTED_TYPES,
  maxSizeMB = MAX_SIZE_MB,
  helperText,
  variant = 'default',
  required = false,
}) => {
  // Estado local para controlar o estilo do componente (default / error / success)
  const [isDragActive, setIsDragActive] = useState(false);
  const [localVariant, setLocalVariant] = useState<FileUploadVariant>(variant);
  // Referência para o input[type="file"] escondido — necessário para sincronizar com validação HTML5
  const inputRef = useRef<HTMLInputElement>(null);

  //#region Handlers

  /**
   * validateFile
   * - Verifica extensão e tamanho do arquivo.
   * - Atualiza o estado visual (localVariant) para 'error' se inválido.
   */
  const validateFile = useCallback(
    (file: File): boolean => {
      const extension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      
      if (!acceptedTypes.includes(extension)) {
        setLocalVariant('error');
        return false;
      }
      
      if (file.size > maxSizeMB * 1024 * 1024) {
        setLocalVariant('error');
        return false;
      }
      
      return true;
    },
    [acceptedTypes, maxSizeMB]
  );

  /**
   * handleFile
   * - Recebe um File já validado, sincroniza-o com o input nativo (DataTransfer)
   *   para que a validação do form HTML5 reconheça o arquivo.
   * - Notifica o pai via onFileSelect para manter o estado controlado.
   */
  const handleFile = (selectedFile: File) => {
      if (validateFile(selectedFile)) {
        setLocalVariant('success');

        // garante que o input[type="file"] receba o arquivo (para validação do form)
        if (inputRef.current) {
          const dt = new DataTransfer();
          dt.items.add(selectedFile);
          inputRef.current.files = dt.files;
        }
        
        onFileSelect?.(selectedFile);
      }
  };

  /**
   * handleDrop
   * - Evita comportamento padrão e processa o primeiro arquivo arrastado.
   */
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragActive(false);
      
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  // Mantém feedback visual enquanto arrastando
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragActive(false);
  }, []);

  /**
   * handleInputChange
   * - Disparado ao selecionar arquivo via diálogo do input nativo.
   * - Reutiliza handleFile para validação/sincronização.
   */
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  /**
   * handleRemove
   * - Remove o arquivo tanto localmente quanto no input nativo e notifica o pai.
   */
  const handleRemove = () => {
    setLocalVariant('default');
    onFileRemove?.();
    if (inputRef.current) {
      inputRef.current.value = '';
      const dt = new DataTransfer();
      inputRef.current.files = dt.files;
    }
  };

  /**
   * Efeito para sincronizar a prop `file` com o input nativo sempre que o pai atualizar
   * (isso cobre o caso em que o arquivo é definido pelo estado do componente pai).
   */
  useEffect(() => {
    if (file) {
      if (inputRef.current) {
        const dt = new DataTransfer();
        dt.items.add(file);
        inputRef.current.files = dt.files;
      }
      setLocalVariant('success');
    } else {
      if (inputRef.current) inputRef.current.value = '';
      setLocalVariant(variant);
    }
  }, [file, variant]);

  // Abre o diálogo de seleção quando o usuário clica na área de DropZone
  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  //#region 

  return (
    <FileUploadWrapper>
      <LabelWrapper>
        <Label 
        htmlFor={id} variant={localVariant === 'error' ? 'error' : 'default'}>
          {label}
        </Label>
        {localVariant === 'success' && CHECKMARK_ICON}
      </LabelWrapper>
      
      
      <DropZone
        variant={localVariant}
        isDragActive={isDragActive}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`Upload ${label}`}
      >
        {/* HiddenInput sincronizado com o estado: necessário para que <form> e sua validação HTML5
            reconheçam o arquivo selecionado (mesmo quando o usuário faz drag-and-drop). */}
        <HiddenInput
          ref={inputRef}
          id={id}
          type="file"
          accept={acceptedTypes.join(',')}
          onChange={handleInputChange}
          required={required}
        />
        <UploadIcon aria-hidden>{UPLOAD_CLOUD_ICON}</UploadIcon>
        <Label variant={'default'}>Drag and drop your files or <strong>click here</strong> to select some.</Label>
      </DropZone>

      {helperText && 
        <HelperText variant={localVariant === 'error' ? 'error' : 'default'}>
          {helperText}
        </HelperText>
      }

      {/* Preview do arquivo: exibido apenas quando a prop `file` estiver presente */}
      { file && 
      <FilePreview>
        <FileInfo>
          {FILE_ICON}
          <FileMeta>
            <FileName>
              <Label variant={'default'}>
                {file.name}
              </Label>
            </FileName>
            <FileType>
              <Label variant={'default'}>
                {file.type}
              </Label>
            </FileType>
          </FileMeta>
        </FileInfo>
        
        <RemoveButton
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${file.name}`}
        >
          ✕
        </RemoveButton>
      </FilePreview>
    }
    </FileUploadWrapper>
  );
};

export type { FileUploadProps } from './types';
export default FileUpload;