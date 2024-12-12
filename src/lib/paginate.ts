import blogPosts from './posts';

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

/**
 * Paginates an array of items and returns them in a structured format
 * @param items The array of items to paginate
 * @param page The current page number (1-based)
 * @param pageSize The number of items per page
 * @returns A PaginatedResponse containing the paginated data and pagination metadata
 */
export function paginateItems<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 10
): PaginatedResponse<T> {
  // Ensure page is at least 1
  page = Math.max(1, page);
  
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  
  // Adjust page if it exceeds total pages
  page = Math.min(page, totalPages);
  
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  
  return {
    data: items.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  };
}


/**
 * Helper function to get paginated blog posts with optional sorting
 */
export function getPaginatedBlogPosts(
  page: number = 1,
  pageSize: number = 10,
  sortBy: 'published' | 'updated' = 'published',
  sortDirection: 'asc' | 'desc' = 'desc'
): PaginatedResponse<typeof blogPosts[0]> {
  // Sort posts
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = a[sortBy] || a.published || new Date();
    const dateB = b[sortBy] || b.published || new Date();
    
    return sortDirection === 'desc' 
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
  
  return paginateItems(sortedPosts, page, pageSize);
}

// Example usage:
// const { data, pagination } = getPaginatedBlogPosts(1, 10, 'published', 'desc');