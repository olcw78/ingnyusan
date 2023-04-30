import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { RoutesManager } from "@/routes/RoutesManager";
import type { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  routesManager: RoutesManager;
}

const Layout: FC<LayoutProps> = ({ children, routesManager }) => (
  <main className="font-pretendard">
    <Navbar routesManager={routesManager} />
    <section className="min-h-[100vh] container my-20 px-20">
      {children}
    </section>
    <Footer />
  </main>
);
export default Layout;
