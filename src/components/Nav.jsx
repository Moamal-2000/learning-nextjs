import Link from "next/link";

const nav = () => {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/about/moamal">Me</Link>
    </nav>
  );
};

export default nav;
