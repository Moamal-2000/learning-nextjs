import s from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={s.home}>
      <h1>Home Page</h1>

      <a href="/about">About</a>
    </main>
  );
}
