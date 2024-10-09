import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = { title: "The Wild Oasis" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>
          {children}
        </main>
        <Counter/>
      </body>
    </html>
  );
}
