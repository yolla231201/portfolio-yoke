import "./globals.css";

export const metadata = {
  title: "Yohanes Kefi",
  description: "Web & Graphic Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[Montserrat]">{children}</body>
    </html>
  );
}
