'use client';
// Import necessary dependencies and components
import React from 'react';
import { formatPrices } from "@/Utils/formatPrices";
import { truncateText } from "@/Utils/truncateText";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Correct import
import { styleClasses } from  '../../../Utils/tailwindClasses';


// Define the props interface for the ProductsCard component
interface productsCardProps {
    data: any; // Data object containing product information
}

// ProductsCard component definition
const ProductsCard: React.FC<productsCardProps> = ({ data }) => {
    const router = useRouter(); // Initialize the useRouter hook
    // Product card container with onClick event handler to navigate to product detail page
    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)} // Navigate to product detail page on click
            className={styleClasses.marketplaceProductCard}
        >
            {/* Container for product information */}
            <div className={styleClasses.marketplaceProductCardInfo}>
                {/* Product image */}
                <div className={styleClasses.marketplaceProductCardImage}
                >
                    <Image
                        fill
                        src={(data.images ?? [])[0]?.image} // Using nullish coalescing operator (??)
                        alt={data.name}
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Product name */}
                <div className="mt-4">
                    {truncateText(data.name)}
                </div>
                {/* Artist name */}
                {/* to add here a link to artist exhebition */}
                <div className="mt-4">{truncateText(data.Artist_Name)}</div>
                {/* Product price */}
                <div className="font-semibold">{formatPrices(data.price)}</div>
            </div>
        </div>
    );
};

export default ProductsCard;
