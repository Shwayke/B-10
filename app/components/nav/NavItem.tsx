import Link from "next/link";

interface NavItemProps {
  label: string; // Required prop for the label text
  path: string; // Required prop for the link path
}

const NavItem: React.FC<NavItemProps> = ({ label, path }) => {
  return (
    <div className="nav-bar-navigation-item">
      <Link href={path} className="w-full">
        <div
          className={'nav-bar-navigation-button'}
        >
          {label}
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
