import Nav from "../components/Nav.jsx";
import "../styles/globals.scss";

export const metadata = {
  title: {
    default: "Learning Next.js",
    template: "%s - Learning Next.js",
  },
  description: "This template is a starting point for learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
