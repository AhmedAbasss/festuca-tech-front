"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { Fragment, ReactNode, useEffect } from "react";

interface IProps {
  children?: ReactNode;
}

const AOSProvider = ({ children }: IProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
