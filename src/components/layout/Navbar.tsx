import { RoutesManager } from "@/routes/RoutesManager";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

interface NavbarProps {
  routesManager: RoutesManager;
}

const Navbar = ({ routesManager }: NavbarProps) => {
  return (
    <S.Root>
      <S.Logo>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl text-slate-600"
        >
          Ingnyusan
        </Link>
      </S.Logo>

      <S.Right>
        <S.Redirectables>{routesManager.build()}</S.Redirectables>
      </S.Right>
    </S.Root>
  );
};
export default Navbar;

const S = {
  Root: tw.div`
    navbar
    bg-teal-100
    rounded-xl
    px-20
  `,

  Logo: tw.div`
    flex-1
  `,

  Right: tw.section`
    flex-none
  `,

  Redirectables: tw.ul`
    menu 
    menu-horizontal 
    px-1 
    gap-x-2
  `
};
