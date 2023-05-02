import { ThemePreferencesContextWrapper } from "@/feature/theme/ThemePreferencesContextWrapper";
import type { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className="font-pretendard">
    <ThemePreferencesContextWrapper>
      <Navbar />
      <section className="min-h-screen py-5 px-[10%] dark:bg-slate-500">
        {children}
      </section>
      <Footer />
    </ThemePreferencesContextWrapper>
  </main>
);
export default Layout;
