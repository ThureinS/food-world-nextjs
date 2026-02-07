import Link from "next/link";

import HeaderImg from "@/assets/logo.png";

import style from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>
        <img src={HeaderImg.src} alt="An image with food on the plate" />
        Food World
      </Link>

      <nav className={style.nav}>
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
  );
};

export default MainHeader;
