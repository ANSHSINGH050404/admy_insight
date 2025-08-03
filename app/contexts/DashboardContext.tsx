import React, { createContext, useContext } from 'react';
import type { DashboardData } from '../types/interfaces';

interface DashboardContextType {
  data: DashboardData | null;
  isLoading: boolean;
  refreshData: () => void;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);