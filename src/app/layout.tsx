import ProviderComponent from "@/components/providers/provider-component";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../styles/tailwind.css";
// import "../styles/scss/product/style.scss";
// import "../styles/globals.scss";

import { Nunito } from "next/font/google";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "remixicon/fonts/remixicon.css";

import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const APP_NAME = "appName App";
const APP_DEFAULT_TITLE = " Home | appName App";
const APP_TITLE_TEMPLATE = "Home - appName App";
const APP_DESCRIPTION = "Best appName App in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content={`${metadata.description}`} />
        <meta name="application-name" content={`${metadata.applicationName}`} />
      </head>

      <body className={nunito.variable}>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}
