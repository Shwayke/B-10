import Link from "next/link";
import { styleClasses } from  '@/Utils/tailwindClasses';

interface NavItemProps {
  label: string; // Required prop for the label text
  path: string; // Required prop for the link path
}

const NavItem: React.FC<NavItemProps> = ({ label, path }) => {
  return (
    <div className={styleClasses.navBarNavigationItem}>
      <Link href={path} className="w-full">
        <div
          className={styleClasses.navBarNavigationButton}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
