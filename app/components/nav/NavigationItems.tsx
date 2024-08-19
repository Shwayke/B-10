'use client';

import NavItem from "./NavItem";
import Container from "../Container";
import { SafeUser } from "@/types";
import { styleClasses } from  '@/Utils/tailwindClasses';

interface UserMenuProps {
    currentUser: SafeUser | null;
}

// NavCategory component to render navigation
const NavigationItems: React.FC<UserMenuProps> = ({ currentUser }) => {

    return (
        <div className={styleClasses.navBarNavigation}>
            <Container>
                <div className={styleClasses.navBarNavigationRow}>
                    <div className={styleClasses.navBarNavigationItems}>
                        <NavItem
                            label="Home"
                            path="/" // Path for the Home link
                        />
                        <NavItem
                            label="MarketPlace"
                            path="/marketPlace" // Path for the MarketPlace link
                        />
                        <NavItem
                            label="Exhibitions"
                            path="/exhibitions" // Path for the Exhibitions link
                        />
                        {currentUser && (
                            <NavItem
                                label="Add Product"
                                path="/add-products" // Corrected path for the Add Product link
                            />
                        )}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavigationItems;
