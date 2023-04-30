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
        className="input input-bordered w-full max-w-sm pl-[50px]"
        ref={searchBarRef}
      />

      {!isFocus ? (
        <>
          <kbd className="kbd kbd-sm right-10 absolute">Ctrl</kbd>
          <kbd className="kbd kbd-sm right-2 absolute">K</kbd>
        </>
      ) : null}
    </div>
  );
};

export default SearchBar;
