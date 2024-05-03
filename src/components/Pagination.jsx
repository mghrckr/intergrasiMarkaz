import React from 'react';

function CustomPagination({ page, handlePagination, products, limit }) {
  return (
    <div className="flex flex-col items-center mt-8 mb-6">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{page}</span> of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">100</span>{" "}
        Pages
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => handlePagination(page - 1)}
          disabled={page === 1}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          onClick={() => handlePagination(page + 1)}
          disabled={products.length < limit}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomPagination;
