const Hamburger = () => {
  return (
    <button class="border-0 bg-transparent btn btn-ghost lg:hidden md:block" onClick={() => {
      console.log("hamburger clicked!");
    }}>
      <img src="/svg/hamburger-menu.svg" alt="hamburger menu icon" />
    </button>
  );
};

export default Hamburger;


