import "./globals.css";

export const metadata = {
  title: "Convo",
  description: "A MERN Stack Chat Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
