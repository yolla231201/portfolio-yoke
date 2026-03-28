import "./globals.css";

export const metadata = {
  title: "Yohanes Kefi",
  description: "Web & Graphic Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Yf33PHLDu9eq2PnTSev1IyRynZ2rHlpCi9S6H-gyrmo"
        />
      </head>
      <body className="font-[Montserrat]">{children}</body>
    </html>
  );
}
