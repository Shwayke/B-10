'use client';
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ContentItem from "./ContentItem";
import { formatPrices } from "@/Utils/formatPrices";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { styleClasses } from  '@/Utils/tailwindClasses';


// Defining the props interface for the CartClient component
interface CartClientProps{
    currentUser: SafeUser | null; 
}

// Defining the CartClient component as a functional component that accepts props of type CartClientProps
const CartClient: React.FC<CartClientProps> = ({currentUser}) => {
    //get are cart Products -->Destructuring values from the useCart hook
    const {cartProducts, handleClearCart,cartTotalAmount} = useCart();
    // Initializing the router
    const router=useRouter();
    // If the cart is empty, render a message and a link to start shopping
    if (!cartProducts || cartProducts.length==0){
        return (
        <div className=" flex flex-col items-center">
            <div className="text-2xl"> Your cart is empty</div>
            <div>
                <Link href={'/marketPlace'} className="
                 flex items-center gap-1 mt-2">
                    <MdArrowBack/>
                <span>Start Shopping</span>
                </Link>
            </div>
        </div>
        );
    }
    // If the cart is not empty, render the cart items and other cart details
  return (
    <div>
        <Heading title="Shopping Cart" center/>
        <div className={styleClasses.cartClientColumns}>
            <div className={styleClasses.cartClientFirstCol}>Product</div>
            <div className={styleClasses.cartClientSecondCol}>Actions</div>
            <div className={styleClasses.cartClientLastCol}>Price</div>
        </div>
        <div>
            {/* Mapping through cartProducts to render each item */}
            {cartProducts && cartProducts.map((item) => {
                return <ContentItem key={item.id} item={item}/>;
            })}
        </div>
        <div className={styleClasses.cartClientManagement}>
            <div className="w-[100px]">
                {/* Button to clear the cart */}
                <Button label='Clear Cart' onClick={() =>
                    {handleClearCart()}} small outline/>
            </div>
            <div className={styleClasses.cartClientCheckoutSection}>
                <div className={styleClasses.cartClientSubTotal}>
                    {/* Displaying subtotal */}
                    <span>Subtotal</span>
                    <span>{formatPrices(cartTotalAmount)}</span>
                </div>
                {/* Additional information */}
                <p className="text-cyan-600">
                    Taxes and Shipping are calculated at checkout
                </p>
                {/* Button to proceed to checkout or login */}
                <Button label={currentUser ? "Checkout" : 'Login To Checkout'} 
                outline = {currentUser ? false : true}
                onClick={()=>{currentUser ? router.push('/checkout') : router.push('/login')}}
                />
                {/* Link to continue shopping */}
                <Link href={'/marketPlace'} className={styleClasses.cartClientContinueShoppingButton}>
                    <MdArrowBack/>
                    <span>Continue Shopping</span>
                </Link>
            </div>
        </div>
    </div>
  );
};

// Exporting the CartClient component as the default export of this module
export default CartClient;