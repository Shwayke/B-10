import Link from "next/link";
import Container from "../Container";
import { styleClasses } from  '@/Utils/tailwindClasses';

const Footer: React.FC = () => {
  return (
    <footer className=" text-sm mt-16 relative">
      <Container>
        <div className={styleClasses.footer}>
          <div className={styleClasses.footerAboutUs}>
            <h3 className={styleClasses.footerAboutUsTitle}>About Us</h3>
            <p className={styleClasses.footerAboutUsText}>
              At Artify, we make it our mission to help you discover and buy from the best emerging artists around the world.
            </p>
            <p>&copy; {new Date().getFullYear()} Artify. All rights reserved</p>
          </div>  
          <div>
            <h3 className={styleClasses.footerCreators}>Creators</h3>
            <p className="mb-1">Shay Pinsky</p>
            <p className="mb-1">Yovel Jirad</p>
            <p className="mb-1">Adar Budomski</p>
            <p className="mb-1">Ariel Dahan</p>  
          </div>    
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
