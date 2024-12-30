"use client"

import { Provider } from "react-redux";
import Nav from "../components/Nav.jsx";
import { store } from "../store/store.js";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Nav />
          <div className="container">{children}</div>
        </body>
      </html>
    </Provider>
  );
}
