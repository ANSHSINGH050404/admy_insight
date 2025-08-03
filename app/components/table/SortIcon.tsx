import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SortIconProps {
  field: string;
  sortField: string;
  sortDirection: string;
}

export const SortIcon: React.FC<{ field: string; sortField: string; sortDirection: string }> = ({ 
  field, 
  sortField, 
  sortDirection 
}) => {
  if (sortField !== field) return <ChevronDown className="h-4 w-4 opacity-50" />;
  return sortDirection === 'asc' ? 
    <ChevronUp className="h-4 w-4" /> : 
    <ChevronDown className="h-4 w-4" />;
};