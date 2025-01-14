"use client";

import store from "@/store";
import { Provider } from "react-redux";
import React, { ReactNode, Suspense } from "react";
import Loading from "@/components/layouts/loading";
import App from "../../../App";
import AOSProvider from "./AOSProvider";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
  return (
    <AOSProvider>
      <SessionProvider>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <App>{children} </App>
          </Suspense>
        </Provider>
      </SessionProvider>
    </AOSProvider>
  );
};

export default ProviderComponent;
