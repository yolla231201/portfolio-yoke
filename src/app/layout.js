import "./globals.css";

export const metadata = {
  title: "Yohanes Kefi",
  description: "Web & Graphic Designer Portfolio",
  verification: {
    google: "Yf33PHLDu9eq2PnTSev1IyRynZ2rHlpCi9S6H-gyrmo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[Montserrat]">{children}</body>
    </html>
  );
}
