import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { RoutesManager } from "@/routes/RoutesManager";
import type { PropsWithChildren } from "react";
import tw from "tailwind-styled-components";

interface LayoutProps extends PropsWithChildren {
  routesManager: RoutesManager;
}

const Layout = ({ children, routesManager }: LayoutProps) => (
  <>
    <Navbar routesManager={routesManager} />
    <Body>{children}</Body>
    <Footer />
  </>
);
export default Layout;

const Body = tw.section`
  min-h-[100vh]
  container
  my-20
  px-20
`;
