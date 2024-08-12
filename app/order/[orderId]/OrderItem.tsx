'use client';

// Importing necessary modules and components
import { CartProductType } from "@prisma/client";
import Image from "next/image";
import DownloadImage from "./DownloadImage";

interface OrderItemProps{
  item: CartProductType
}

// Define the OrderItem functional component
const OrderItem: React.FC<OrderItemProps> = ({item}) => {


  return (
    <div>
      {/* Products ordered */}
      <h1 className="order-item-name">{item.name}</h1>
      <h4 className="order-item-artist">{item.Artist_Name}</h4>
      <div className="order-item-card">
        {/* Column 1: Product Image and Name */}
        <div className="order-item-image">
          <div className="order-item-image-inner">
            {/* Displaying product image */}
            <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain"/>
          </div>
        </div>
        {/* Column 2: Download Button */}
        <div className="justify-self-center">
          <DownloadImage key={item.id} item={item}/>
        </div>
      </div>
    </div>
  )
};

export default OrderItem;