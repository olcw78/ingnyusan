import type { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className="font-pretendard">
    <Navbar />
    <div className="flex flex-row">
      <Sidebar />
      <section className="container min-h-screen px-4 py-5 w-[80%]">
        {children}
      </section>
    </div>
    <Footer />
  </main>
);
export default Layout;
