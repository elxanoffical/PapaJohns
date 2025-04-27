import "./globals.css";

export const metadata = {
  title: "PapaJohns | Pizza",
  description: "world most popular Pizza Restaurants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
