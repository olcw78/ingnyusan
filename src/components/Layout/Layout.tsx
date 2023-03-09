import { PropsWithChildren } from "react";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />
    <section className="min-h-[100vh] container px-20">{children}</section>
    <Footer />
  </>
);
export default Layout;
