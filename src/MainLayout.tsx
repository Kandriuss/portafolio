import type { LayoutProps } from "./libs/types/Layout/Layout";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};