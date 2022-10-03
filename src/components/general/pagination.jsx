import {useMemo} from "react";
import Shift from '../../styles/varibles/shift';

import './pagination.css';

const DOTS = '...';
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
    };

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / pageSize);
      const totalPageNumbers = siblingCount + 5;
  
      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }
      
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );
  
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
  
      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);
  
        return [...leftRange, DOTS, totalPageCount];
      }
  
      if (shouldShowLeftDots && !shouldShowRightDots) {
        
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange];
      }
       
      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };


function Pagination(props) {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;
    
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    
    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className={["pagination-container", className].join(' ')} style={Shift.pagination}>
            <div className={currentPage === 1? 
                                'pagination-item'.concat(' ', 'disabled')
                                : 'pagination-item'}>
                <div className="arrow left" onClick={onPrevious} style={{visibility: currentPage === 1? 'hidden': 'visible'}}></div>
            </div>
            
            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return <div className="pagination-item dots">&#8230;</div>;
                }

                return (
                    <div
                        key={i}
                        className={pageNumber === currentPage? 
                                    'pagination-item'.concat(' ', 'selected')
                                    : 'pagination-item'}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                );
            })}
            <div className={currentPage === lastPage? 
                                'pagination-item'.concat(' ', 'disabled')
                                : 'pagination-item'}>
                <div className="arrow right" onClick={onNext} style={{visibility: currentPage === lastPage? 'hidden': 'visible'}}></div>
            </div>
        </div>
    )
}

export default Pagination;
