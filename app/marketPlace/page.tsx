
import React from 'react';
import NullDataError from '@/app/components/NullDataError';
import ProductsCard from '../components/products/ProductsCard';
import getProducts from '@/actions/getProducts';
import Container from '../components/Container';
import { styleClasses } from  '../../Utils/tailwindClasses';

// Define the MarketplacePage component
export default async function MarketplacePage() {
    const products = await getProducts()

    if (products.length === 0) {
        return <NullDataError title='Oops! No products found.' />;
    }

    return (
        <Container>
        <div className={styleClasses.marketplace}>
            {products.map((product: any, index: number) => (
                <ProductsCard key={index} data={product} />
            ))}
        </div>
        </Container>

    );
};

