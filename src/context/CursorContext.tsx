'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { CursorState } from '@/types';

interface CursorContextType {
  state: CursorState;
  setLabel: (label: string) => void;
  clearLabel: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CursorState>({
    scale: 1,
    label: '',
    isHovered: false,
  });

  // Stable identities (useCallback) so effects that depend on these
  // (e.g. Cursor's global hover-delegation listener) don't get torn down
  // and re-attached on every hover state change.
  const setLabel = useCallback((label: string) => {
    setState({
      scale: label ? 2.1 : 1.7,
      label,
      isHovered: true,
    });
  }, []);

  const clearLabel = useCallback(() => {
    setState({
      scale: 1,
      label: '',
      isHovered: false,
    });
  }, []);

  return (
    <CursorContext.Provider value={{ state, setLabel, clearLabel }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorContext() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursorContext must be used within a CursorProvider');
  }
  return context;
}
