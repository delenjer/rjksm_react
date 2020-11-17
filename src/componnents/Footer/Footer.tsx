import React, { FC } from 'react';

// @ts-ignore
import ReactPaginate from 'react-paginate';

type FooterProps = {
  isLoading: boolean;
  pagesCount: any;
  handlePageClick: any,
}

export const Footer:React.FC<FooterProps> = (
  {
    isLoading,
    pagesCount,
    handlePageClick,
  },
) => {

  return (
    <footer
      className={isLoading
        ? 'hidden footer'
        : 'footer'
      }
    >
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </footer>
  );
};
