import Counter from "./_components/Counter";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
        <Counter />
      </body>
    </html>
  );
}
