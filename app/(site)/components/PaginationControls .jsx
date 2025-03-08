import Link from 'next/link';

const PaginationControls = ({ pagination }) => {
  const { totalPages, currentPage } = pagination;
  
  // Function to generate the page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // Always include first page
    pageNumbers.push(1);
    
    // Add ellipsis if needed
    if (currentPage > 3) {
      pageNumbers.push('ellipsis-1');
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i > 1 && i < totalPages) {
        pageNumbers.push(i);
      }
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push('ellipsis-2');
    }
    
    // Always include last page if there's more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const pageNumbers = getPageNumbers();
  
  if (totalPages <= 1) {
    return null; // Don't show pagination if there's only one page
  }
  
  return (
    <nav aria-label="Blog pagination" className="flex justify-center mt-8">
      <ul className="flex items-center space-x-1">
        {/* Previous Page Button */}
        <li>
          <Link
            href={`/blogs?page=${currentPage - 1}`}
            className={`px-3 py-2 rounded-md ${
              currentPage === 1 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
            onClick={e => currentPage === 1 && e.preventDefault()}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        
        {/* Page Numbers */}
        {pageNumbers.map((pageNumber, index) => (
          <li key={`page-${pageNumber}-${index}`}>
            {String(pageNumber).includes('ellipsis') ? (
              <span className="px-3 py-2">...</span>
            ) : (
              <Link
                href={`/blogs?page=${pageNumber}`}
                className={`px-3 py-2 rounded-md ${
                  currentPage === pageNumber 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-current={currentPage === pageNumber ? 'page' : undefined}
              >
                {pageNumber}
              </Link>
            )}
          </li>
        ))}
        
        {/* Next Page Button */}
        <li>
          <Link
            href={`/blogs?page=${currentPage + 1}`}
            className={`px-3 py-2 rounded-md ${
              currentPage === totalPages 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : 0}
            onClick={e => currentPage === totalPages && e.preventDefault()}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationControls;