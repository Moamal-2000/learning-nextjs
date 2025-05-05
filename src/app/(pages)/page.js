import ClientComponent from "@/components/ClientComponent";
import s from "../page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <h2>Home page</h2>
      <ClientComponent />
    </main>
  );
}
