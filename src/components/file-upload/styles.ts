import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';
import type { FileUploadVariant } from './types';
import { Label } from '../input/styles';

const getBorderColor = (theme: AppTheme, variant: FileUploadVariant): string => {
  switch (variant) {
    case 'dragging':
      return theme.color.border.dark;
    case 'error':
      return theme.color.border.danger;
    case 'success':
      return theme.color.border.default;
    case 'hover':
      return theme.color.border.default;
    default:
      return theme.color.border.default;
  }
};

const getBackgroundColor = (theme: AppTheme, variant: FileUploadVariant): string => {
  switch (variant) {
    case 'dragging':
      return `${theme.color.background.light}`;
    case 'error':
      return `${theme.color.background.soft}`;
    case 'success':
      return theme.color.background.soft;
    default:
      return theme.color.background.soft;
  }
};

export const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall}px;
  width: 100%;
`;

export const DropZone = styled.div<{ variant: FileUploadVariant; isDragActive: boolean }>`
  border: 1px dashed ${({ theme, variant, isDragActive }) =>
    getBorderColor(theme, isDragActive ? 'dragging' : variant)};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background: ${({ theme, variant, isDragActive }) =>
    getBackgroundColor(theme, isDragActive ? 'dragging' : variant)};
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.default}px;

  &:hover {
    border-color: ${({ theme }) => theme.color.border.dark};
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const UploadIcon = styled.div`
  color: ${({ theme }) => theme.color.content.default};
`;

export const FilePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xsmall}px ${({ theme }) => theme.spacing.small}px;
  border: 1px solid ${({ theme }) => theme.color.border.default};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.color.background.default};
  margin-top: ${({ theme }) => theme.spacing.xsmall}px;
  gap: ${({ theme }) => theme.spacing.default}px;
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.default}px;
  flex: 1;
  min-width: 0;
`;

export const FileMeta = styled.div`
  flex: 1;
  min-width: 0;
  gap: .25rem;
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.div`
  & ${Label} {
    font-weight: 600;
  }
`;

export const FileType = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.content.default};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.color.content.default};
  font-size: 1rem;
  border-radius: 50%;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.color.background.light};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focused};
  }
`;
