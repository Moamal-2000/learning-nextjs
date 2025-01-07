"use client";

import { Provider } from "react-redux";
import GlobalContextProvider from "../context/GlobalContext";
import { store } from "../store/store";
import Nav from "./Nav";

const RootProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalContextProvider>
        <html lang="en">
          <body>
            <Nav />
            <div className="container">{children}</div>
          </body>
        </html>
      </GlobalContextProvider>
    </Provider>
  );
};

export default RootProviders;
