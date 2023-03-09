import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Home 블로그 공사중!!!</h1>
      <br />
      <div>Button clicked {counter} times</div>
      <button onClick={() => setCounter(p => p + 1)}>Click me!</button>
    </>
  );
}
