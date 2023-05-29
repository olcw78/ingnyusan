import SidePanel from "@/components/SidePanel.astro";
import { useState } from "preact/compat";

const Hamburger = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const toggleSidePanel = () => setIsSidePanelOpen((state) => !state);

  return (
    <>
      <button className="lg:hidden md:block mx-2" onClick={toggleSidePanel}>
        <img src="/svg/hamburger-menu.svg" alt="hamburger menu icon" />
      </button>

      {isSidePanelOpen && <SidePanel />}
    </>
  );
};

export default Hamburger;
