import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from 'next/image';
import logo from "./public/logo2.png";

// Navbar.tsx
import dynamic from 'next/dynamic';
import NavigationItems from "./NavigationItems";
import Container from "../Container";
import { styleClasses } from  '@/Utils/tailwindClasses';

// Dynamically import the ThemeBtn component with ssr: false
const ThemeBtn = dynamic(() => import('../DarkLightButton'), {
  ssr: false,
});

const Navbar = async () => {

  const currentUser= await getCurrentUser();


  return (
    <div className={styleClasses.navBar}>
      <Container>
        <div className={styleClasses.navBarInner}>
          {/* Left side: Logo and Navigation Links */}
          <div className={styleClasses.navBarLogo}>
            {/* Navigation Links */}
            <Link href="/" className="flex items-center">
            <Image src={logo.src} alt="Home" className="h-8" width={32} height={32} />
            <span>rtify</span>
            </Link>
          </div>
          {/*className="hidden md:block" */}

          {/* Right side: Account and Cart Icons */}
          <div className={styleClasses.navBarMenues}>
            {/*div here inorder to not go back to homepage every time */}
            <div className={styleClasses.navBarUserMenu}><UserMenu currentUser={currentUser}/></div>
            {/* Cart Icon with badge */}
            <div className="relative">
              <CartCount/>
              {/* Badge */}
            </div>
            <ThemeBtn/>
          </div>
        </div>
      </Container>
      <NavigationItems currentUser={currentUser}/> 
    </div>
 
  );
};

export default Navbar;