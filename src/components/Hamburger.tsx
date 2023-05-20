const Hamburger = () => {
  return (
    <button class="bg-transparent border-0 btn btn-ghost lg:hidden md:block" onClick={() => {
      console.log("hamburger clicked!");
    }}>
      <img src="/svg/hamburger-menu.svg" alt="hamburger menu icon" />
    </button>
  );
};

export default Hamburger;


