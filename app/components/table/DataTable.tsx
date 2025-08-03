
import React from 'react';
import { Filter } from 'lucide-react';
import type { Campaign } from '../../types/interfaces';
import { useTheme } from '../../hooks/useTheme';
import { useSearch } from '../../hooks/useSearch';
import { useSort } from '../../hooks/useSort';
import { usePagination } from '../../hooks/usePagination';
import { Button } from '../ui/Button';
import { SearchInput } from '../ui/SearchInput';
import { SortIcon } from './SortIcon';
import { Pagination } from './Pagination';

interface DataTableProps {
  campaigns: Campaign[];
}
 




export const DataTable: React.FC<{ campaigns: Campaign[] }> = ({ campaigns }) => {
  const { isDark } = useTheme();
  const { filteredItems, searchTerm, setSearchTerm } = useSearch(campaigns, ['name', 'status']);
  const { sortedItems, sortField, sortDirection, handleSort } = useSort(filteredItems);
  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    hasNext,
    hasPrev
  } = usePagination(sortedItems, 3);

  const tableHeaders = [
    { key: 'name', label: 'Campaign Name' },
    { key: 'status', label: 'Status' },
    { key: 'budget', label: 'Budget' },
    { key: 'spent', label: 'Spent' },
    { key: 'roi', label: 'ROI' },
    { key: 'clicks', label: 'Clicks' }
  ];

  return (
    <div className={`rounded-xl border p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Campaign Performance
        </h3>
        <div className="flex items-center space-x-4">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search campaigns..."
          />
          <Button>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              {tableHeaders.map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => handleSort(key as keyof Campaign)}
                  className={`text-left py-4 px-4 font-medium text-sm cursor-pointer hover:bg-opacity-50 transition-colors ${
                    isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    {label}
                    <SortIcon field={key} sortField={sortField.toString()} sortDirection={sortDirection} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((campaign) => (
              <tr
                key={campaign.id}
                className={`border-b transition-colors hover:bg-opacity-50 ${
                  isDark 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-100 hover:bg-gray-50'
                }`}
              >
                <td className={`py-4 px-4 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {campaign.name}
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : campaign.status === 'Paused'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className={`py-4 px-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {campaign.budget}
                </td>
                <td className={`py-4 px-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {campaign.spent}
                </td>
                <td className={`py-4 px-4 font-medium text-green-600`}>
                  {campaign.roi}
                </td>
                <td className={`py-4 px-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {campaign.clicks.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        hasNext={hasNext}
        hasPrev={hasPrev}
        totalItems={sortedItems.length}
        itemsPerPage={3}
      />
    </div>
  );
};