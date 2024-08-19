// Importing necessary modules and components
import { formatPrices } from "@/Utils/formatPrices";
import Link from "next/link";
import { truncateText } from "@/Utils/truncateText";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Button from "../components/Button";
import { styleClasses } from "@/Utils/tailwindClasses";


// Define props for ContentItem component
interface ContentItemProps {
  item: CartProductType;// Cart product item
}

// Define ContentItem functional component
const ContentItem: React.FC<ContentItemProps> = ({ item }) => {
  // Destructuring handleRemoveProductFromCart from useCart hook
  const {handleRemoveProductFromCart} = useCart();

  // Event handler for removing a product from cart
  const handleRemoveClick = () => {
    handleRemoveProductFromCart(item); // Call handleRemoveProductFromCart with item parameter
  };

   // Render the ContentItem component
  return (
    <div className={styleClasses.cartItem}>
      <div className={styleClasses.cartItemFirstCol}>
        {/* Link to product details page */}
        <Link href={`/product/${item.id}`}>
          <div className={styleClasses.cartItemImage}>
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className={styleClasses.cartItemNames}>
          {/* Link to product details page */}
          <Link href={`/product/${item.id}`}>
            {truncateText(item.name)} {/* Truncate product name if too long */}
          </Link>
          <Link href={`/product/${item.id}`}>
            {truncateText(item.Artist_Name)} {/* Truncate product name if too long */}
          </Link>
        </div>
      </div>
      <div className={styleClasses.cartClientSecondCol}>
        <Button label={'Remove'} 
          outline = {true}
          small = {true}
          onClick={()=>{handleRemoveClick()}}
        />
      </div>
      <div className={styleClasses.cartClientLastCol}>
        {formatPrices(item.price)} {/* Display formatted price */}
      </div>
    </div>
  );
};
// Export the ContentItem component
export default ContentItem;
