import s from "./page.module.scss";

export const metadata = {
  title: {
    default: "Home - Learning Next.js",
  },
};

export default function HomePage() {
  return (
    <main className={s.home}>
      <h1>Home Page</h1>
    </main>
  );
}
