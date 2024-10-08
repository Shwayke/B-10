'use client';

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation"; // Importing useRouter hook from Next.js for navigation
import { TiShoppingCart } from "react-icons/ti";
import { styleClasses } from  '@/Utils/tailwindClasses';


// CartCount component to display the total quantity of items in the cart
const CartCount = () => {
    const {cartTotalQty} = useCart(); // Using custom hook to get cart total quantity
    const router =useRouter();
    return (
        <div 
        className="relative cursor-pointer" 
        onClick={()=>router.push('/cart')}>
            {/* Shopping cart icon */}
            <div className="text-3xl">
                <TiShoppingCart className="cursor-pointer" />
            </div>
            {/* Cart count badge */}
            <span className={styleClasses.cartCountIcon}>{cartTotalQty}</span>
        </div>
    );
};

export default CartCount