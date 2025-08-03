import React from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useDashboard } from '../../hooks/useDashboard';
import { DataService } from '../../services/DataService';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { data } = useDashboard();

  const handleExport = () => {
    if (data?.campaigns) {
      DataService.exportToCsv(data.campaigns);
    }
  };

  return (
    <header
      className={`border-b transition-colors duration-300 ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  ADmyBRAND Insights
                </h1>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Digital Marketing Analytics
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="md"
              className="p-2"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
