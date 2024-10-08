import { styleClasses } from  '@/Utils/tailwindClasses';

// Define the props interface for MenuItem component
interface MenuItemProps {
    children: React.ReactNode;
    onClick: () => void;
}

// MenuItem component to render a clickable menu item
const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    return (
        <div className={styleClasses.userMenuItem}>
            <a onClick={onClick}>{children}</a>
        </div>
    );
};

export default MenuItem;
