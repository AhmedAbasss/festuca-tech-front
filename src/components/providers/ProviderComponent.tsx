// "use client";

// import { Provider } from "react-redux";
// import React, { ReactNode, Suspense } from "react";
// import { SessionProvider } from "next-auth/react";
// import store from "@/store";
// import App from "./App";
// import AOSProvider from "./AOSProvider";
// import Loading from "../layouts/loading";

// interface IProps {
//   children?: ReactNode;
// }

// const ProviderComponent = ({ children }: IProps) => {
//   return (
//     <AOSProvider>
//       <SessionProvider>
//         <Provider store={store}>
//           {/* <ThemeProvider
//                 attribute="class"
//                 defaultTheme="light"
//                 // defaultTheme="system"
//                 // enableSystem
//                 disableTransitionOnChange
//             > */}
//           <Suspense fallback={<Loading />}>
//             <App>{children} </App>
//           </Suspense>
//           {/* <TailwindIndicator /> */}
//           {/* </ThemeProvider> */}
//         </Provider>
//       </SessionProvider>
//     </AOSProvider>
//   );
// };

// export default ProviderComponent;
