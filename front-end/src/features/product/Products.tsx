import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { getPagedProductsAsync, getProductsAmountAsync, selectProducts, selectProductsAmount } from './productSlice';
import { Pagination } from '@mui/material';
import { Button } from 'react-bootstrap';
import { addProduct } from '../cart/cartSlice';

const Products = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const products = useAppSelector(selectProducts);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPagedProductsAsync(page));

        dispatch(getProductsAmountAsync());
    }, [page]);

    const productsAmount = useAppSelector(selectProductsAmount);

    const itemsPerPage = 20;

    const totalPages = Math.ceil(productsAmount / itemsPerPage);

    const nextPages = [];
    for (let i = page; i <= totalPages && i <= page + 4; i++) {
        nextPages.push(i);
    }
  return (
    <div>
        
        <div>
        <Pagination
                count={totalPages}
                page={page}
                onChange={(event, newPage) => setPage(newPage)}
                size="small"
              />
        </div>

        <div>
        {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.product_name}</h3>
                    <Button variant="dark" onClick={() => dispatch(addProduct({ item: product, amount: 1 }))}>Add To Cart</Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products