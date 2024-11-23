import { Press_Start_2P } from "next/font/google";

import "nes.css/css/nes.min.css";

import "./globals.css";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "DotDager",
  description: "Portafolio Personal",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}
