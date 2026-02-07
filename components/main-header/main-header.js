import Link from "next/link";

import HeaderImg from "@/assets/logo.png";

import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={HeaderImg}
            alt="An image with food on the plate"
            priority
          />
          Food World
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Explore Meals</Link>
            </li>
            <li>
              <Link href="/community">Food Lover Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
