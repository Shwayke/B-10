'use client'

import React from 'react';
import Image from "next/image";
import { styleClasses } from '@/Utils/tailwindClasses';

// Define the props type for ProductPreview
interface ProductPreviewProps {
  data: any;
}

// Define the ProductPreview component
const ProductPreview: React.FC<ProductPreviewProps> = ({ data }) => {

    return (
      <div className={styleClasses.exhibitionCard}>
        <div className={styleClasses.exhibitionCardImage}>
            <Image
                fill
                src={(data.images ?? [])[0]?.image}
                alt={data.Artist_Name}
                className="object-cover"
            />
        </div>
        <div className={styleClasses.exhibitionCardTitle}>{data.name}</div>
      </div>
    );
};

export default ProductPreview;
