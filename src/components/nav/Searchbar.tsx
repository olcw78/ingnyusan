import { useEffect, useRef, useState } from 'preact/hooks'

const SearchBar = () => {
  const searchBarRef = useRef<HTMLInputElement>(null)
  const [isFocus, setIsFocus] = useState(false)

  const onFocus = () => setIsFocus(true)
  const onFocusOut = () => setIsFocus(false)

  useEffect(() => {
    if (!searchBarRef?.current) return
    searchBarRef.current.addEventListener('focusout', onFocusOut)

    return () => {
      if (!searchBarRef?.current) return

      searchBarRef.current.removeEventListener('focusout', onFocusOut)
    }
  }, [searchBarRef])

  return (
    <div className='relative block mr-10 max-lg:hidden'>
      <img
        src='/svg/search.svg'
        alt='search icon svg'
        className='absolute left-3 top-[25%]'
      />

      <input
        type='text'
        placeholder='블로그 검색!'
        onFocus={onFocus}
        className='w-full max-w-sm input input-bordered pl-[50px]'
        ref={searchBarRef}
      />

      {!isFocus ? (
        <>
          <kbd className='absolute right-10 top-[25%] kbd kbd-sm'>Ctrl</kbd>
          <kbd className='absolute right-2 top-[25%] kbd kbd-sm'>K</kbd>
        </>
      ) : null}
    </div>
  )
}

export default SearchBar
