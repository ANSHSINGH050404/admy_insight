import { useState } from "react";



export const useSort = <T>(items: T[], initialField: keyof T = 'name' as keyof T) => {
  const [sortField, setSortField] = useState<keyof T>(initialField);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof T) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase() as T[keyof T];
      bValue = (bValue as string).toLowerCase() as T[keyof T];
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return { sortedItems, sortField, sortDirection, handleSort };
};