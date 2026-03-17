import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "./meals-grid";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getMeals();

  {

  }

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it for yourselves.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
