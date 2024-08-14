'use client';

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import Avatar from "../Avatar";
import { styleClasses } from  '@/Utils/tailwindClasses';

interface UserMenuProps {
    currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div onClick={toggleOpen} className={styleClasses.userMenu}>
                <Avatar />
                <AiFillCaretDown />
            </div>
            {isOpen && (
                <div className={styleClasses.openedUserMenu}>
                    {currentUser ? (
                        <>
                            <Link href="/purchases">
                                <MenuItem onClick={toggleOpen}>Your Purchases</MenuItem>
                            </Link>
                            <Link href="/manage-products">
                                <MenuItem onClick={toggleOpen}>Manage Products</MenuItem>
                            </Link>
                            <hr />
                            <MenuItem onClick={() => {
                                toggleOpen();
                                signOut({ callbackUrl: '/' });
                            }}>Logout</MenuItem>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <MenuItem onClick={toggleOpen}>Login</MenuItem>
                            </Link>
                            <Link href="/register">
                                <MenuItem onClick={toggleOpen}>Register</MenuItem>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserMenu;