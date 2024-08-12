'use client'

import React from 'react';
import Image from "next/image";

// Define the props type for ProductPreview
interface ProductPreviewProps {
  data: any;
}

// Define the ProductPreview component
const ProductPreview: React.FC<ProductPreviewProps> = ({ data }) => {

    return (
      <div className="exhibition-card">
        <div className="exhibition-card-image">
            <Image
                fill
                src={(data.images ?? [])[0]?.image}
                alt={data.Artist_Name}
                className="object-cover"
            />
        </div>
        <div className="exhibition-card-title">{data.name}</div>
      </div>
    );
};

export default ProductPreview;
