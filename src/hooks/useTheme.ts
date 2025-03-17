// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../context/theme/types';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);