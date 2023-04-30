const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full max-w-sm pl-[50px]"
      />

      <kbd className="kbd kbd-sm right-10 absolute">Ctrl</kbd>
      <kbd className="kbd kbd-sm right-2 absolute">K</kbd>
    </div>
  );
};

export default SearchBar;
