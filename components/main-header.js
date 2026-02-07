import Link from "next/link";

import HeaderImg from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={HeaderImg.src} alt="An image with food on the plate" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Explore Meals</Link>
          </li>
          <li>
            <Link href="/community">Food Lover Community</Link>
          </li>
          <li>
            <Link href="/meals">Explore Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
