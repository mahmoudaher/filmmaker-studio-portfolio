import localFont from "next/font/local";
import "./globals.css";

const sansita = localFont({
  src: "../public/fonts/Sansita-Regular.ttf",
  variable: "--font-sansita",
  weight: "400",
  display: "swap",
});

const federo = localFont({
  src: "../public/fonts/Federo-Regular.ttf",
  variable: "--font-federo",
  weight: "400",
  display: "swap",
});

const montserrat = localFont({
  src: "../public/fonts/Montserrat-Light.ttf",
  variable: "--font-montserrat",
  weight: "400",
  display: "swap",
});

const bebas = localFont({
  src: "../public/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

const futura = localFont({
  src: "../public/fonts/FuturaCyrillicBold.ttf",
  variable: "--font-futura",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Souleyman Mumtaz – Documentary Filmmaker & Photojournalist",
  description:
    "Portfolio of Souleyman Mumtaz, a documentary filmmaker and photojournalist showcasing film and photography projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${futura.variable} ${montserrat.variable} ${sansita.variable} ${federo.variable} ${bebas.variable}`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
