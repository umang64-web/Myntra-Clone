import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-2">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
            className={`px-3 py-1 rounded ${
              isFirstPage ? 'hidden' : 'bg-white hover:bg-gray-200 border border-slate-400'
            }`}
          >
            Previous
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
            className={`px-3 py-1 rounded ${
              isLastPage ? 'hidden' : 'bg-white hover:bg-gray-200 border border-slate-400'
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
