import Link from "next/link";

const nav = () => {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default nav;
