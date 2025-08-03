'use client'
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { DashboardContext } from './contexts/DashboardContext';
import { DataService } from './services/DataService';
import { Header } from './components/layout/Header';
import { DashboardContent } from './components/layout/DashboardContent';
import type { DashboardData } from './types/interfaces';


const Dashboard: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);

  const toggleTheme = () => setIsDark(!isDark);
  const refreshData = () => setData(DataService.generateMockData());

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setData(DataService.generateMockData());
      setIsLoading(false);
    }, 1500);

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (!isLoading) {
        setData(DataService.generateMockData());
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <DashboardContext.Provider value={{ data, isLoading, refreshData }}>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <Header />
          <DashboardContent />
        </div>
      </DashboardContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Dashboard