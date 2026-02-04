import React, { useState, useCallback, useRef } from 'react';
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

const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx', '.odt'];
const MAX_SIZE_MB = 5;

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  id,
  onFileSelect,
  onFileRemove,
  acceptedTypes = ACCEPTED_TYPES,
  maxSizeMB = MAX_SIZE_MB,
  helperText,
  variant = 'default',
  required = false,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [localVariant, setLocalVariant] = useState<FileUploadVariant>(variant);
  const inputRef = useRef<HTMLInputElement>(null);

  //#region Handlers

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

  const handleFile = useCallback(
    (file: File) => {
      if (validateFile(file)) {
        setUploadedFile(file);
        setLocalVariant('success');
        onFileSelect?.(file);
      }
    },
    [validateFile, onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragActive(false);
      
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragActive(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleRemove = useCallback(() => {
    setUploadedFile(null);
    setLocalVariant('default');
    onFileRemove?.();
    if (inputRef.current) inputRef.current.value = '';
  }, [onFileRemove]);

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

      {helperText && (
        <HelperText variant={localVariant === 'error' ? 'error' : 'default'}>
          {helperText}
        </HelperText>
      )}

      { uploadedFile &&
      <FilePreview>
        <FileInfo>
          {FILE_ICON}
          <FileMeta>
            <FileName>
              <Label variant={'default'}>
                {uploadedFile.name}
              </Label>
            </FileName>
            <FileType>
              <Label variant={'default'}>
                {uploadedFile.type}
              </Label>
            </FileType>
          </FileMeta>
        </FileInfo>
        
        <RemoveButton
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${uploadedFile.name}`}
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