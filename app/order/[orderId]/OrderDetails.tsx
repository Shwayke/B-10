'use client';

// Importing necessary modules and components
import { formatPrices } from "@/Utils/formatPrices";
import { Order } from "@prisma/client"
import moment from "moment";
import OrderItem from "./OrderItem";
import Heading from "@/app/components/Heading";


// Define the OrderDetails functional component
interface OrderDetailsProps{
    order: Order
}

const OrderDetails: React.FC<OrderDetailsProps> = ({order}) => {

    //const router= useRouter();
    return (
        <div className="order-details">
            {/* Heading for order details */}
            <div className="mt-8"> 
                <Heading title="Purchase Details"/>
            </div>
            {/* Purchase ID */}
            <div> Purchase ID: {order.id}</div>
            {/* Total Price */}
            <div> Total Price: {" "}
                <span className="font-bold">{formatPrices(order.amount/100)}</span>
            </div>
            {/* Date */}
            <div> Date: {moment (order.createDate).fromNow()}</div>
            <div>
                {/* Mapping through order products and rendering OrderItem component */}
                {order.products && order.products.map(item =>{
                    return <OrderItem key={item.id} item={item}></OrderItem>
                })}
            </div>


        </div>
    );
};

export default OrderDetails;