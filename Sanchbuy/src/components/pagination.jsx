import React from 'react';
import { Pagination as BsPagination } from 'react-bootstrap';
import '../styles/pagination.scss'

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <BsPagination>
      {pageNumbers.map((number) => (
        <BsPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </BsPagination.Item>
      ))}
    </BsPagination>
  );
};

export default Pagination;
