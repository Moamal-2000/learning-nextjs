import Link from "next/link";

const nav = () => {
  return (
    <nav className="nav">
      <div className="routes">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/about/moamal">Me</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
        <Link href="/forgot-password">Forgot password?</Link>
      </div>
    </nav>
  );
};

export default nav;
