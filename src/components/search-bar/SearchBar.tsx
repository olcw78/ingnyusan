import SearchIcon from "@/assets/svg/search.svg";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onFocusOut = () => setIsFocus(false);

  useEffect(() => {
    if (!searchBarRef?.current) return;

    searchBarRef.current.addEventListener("focusout", onFocusOut);

    return () => {
      if (!searchBarRef?.current) return;

      searchBarRef.current.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div className="relative">
      <img src={SearchIcon} alt="search icon svg" className="absolute left-3" />

      <input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        className="w-full max-w-sm input input-bordered pl-[50px]"
        ref={searchBarRef}
      />

      {!isFocus ? (
        <>
          <kbd className="absolute right-10 kbd kbd-sm">Ctrl</kbd>
          <kbd className="absolute right-2 kbd kbd-sm">K</kbd>
        </>
      ) : null}
    </div>
  );
};

export default SearchBar;