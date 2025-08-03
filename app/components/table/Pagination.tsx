import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button'


 export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
  totalItems: number;
  itemsPerPage: number;
}> = ({ currentPage, totalPages, onPageChange, hasNext, hasPrev, totalItems, itemsPerPage }) => {
  const { isDark } = useTheme();
  
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between mt-6">
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Showing {startItem} to {endItem} of {totalItems} campaigns
      </p>
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrev}
          size="sm"
        >
          Previous
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            variant={currentPage === i + 1 ? 'primary' : 'secondary'}
            size="sm"
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNext}
          size="sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};