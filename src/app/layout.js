import "./page.css";
export const metadata = {
  title: "Todo List",
  description: "Project for Vanier College's final semester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
console.log("test")