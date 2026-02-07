import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div>
        <Link href="/community">Community</Link>
      </div>
      <div>
        <Link href="/meals">Meals</Link>
      </div>
      <div>
        <Link href="/meals/share">Share Meals</Link>
      </div>
      <div>
        <Link href="/meals/share">Share Meals</Link>
      </div>
    </main>
  );
}
