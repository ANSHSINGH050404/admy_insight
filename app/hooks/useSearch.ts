import { useState } from "react";

export const useSearch = <T>(items: T[], searchFields: (keyof T)[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    searchFields.some(field => {
      const value = item[field];
      return typeof value === 'string' && 
             value.toLowerCase().includes(searchTerm.toLowerCase());
    })
  );

  return { filteredItems, searchTerm, setSearchTerm };
};