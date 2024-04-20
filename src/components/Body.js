import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import Pagination from './Pagination';
import Filter from './Filter';

export default function Body() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const products = useSelector((store)=>store.filterData.lists);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return (
        <div className='flex'>
          <Filter/>
        <div>
        <ProductList products={currentProducts} />
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
        </div>
        </div>
  )
}
