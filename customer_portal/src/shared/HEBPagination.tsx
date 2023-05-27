import React, { FC } from "react";
import twFocusClass from "@/utils/twFocusClass";

export interface PaginationProps {
  className?: string;
  recordPerPage: number;
  totalRecords: number;
  paginate: any;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ 
  className = "", 
  recordPerPage, 
  totalRecords, 
  paginate,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecords / recordPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}>
      {pageNumbers.map(number => (
        <li key={number} className={number == currentPage 
          ? `inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`
          : `inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}>
          <a onClick={() => paginate(number)} className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
