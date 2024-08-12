'use client';

import NavItem from "./NavItem";
import Container from "../Container";
import { SafeUser } from "@/types";

interface UserMenuProps {
    currentUser: SafeUser | null;
}

// NavCategory component to render navigation
const NavigationItems: React.FC<UserMenuProps> = ({ currentUser }) => {

    return (
        <div className="nav-bar-navigation">
            <Container>
                <div className="nav-bar-navigation-row">
                    <div className="nav-bar-navigation-items">
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
