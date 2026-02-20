"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "./nav-link.module.css";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
