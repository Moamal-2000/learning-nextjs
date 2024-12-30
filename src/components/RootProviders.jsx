"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import Nav from "./Nav";

const RootProviders = ({ children }) => {
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
};

export default RootProviders;
