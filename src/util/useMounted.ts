import { useEffect, useState } from "react";

export const useMounted = () => {
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return hasMounted;
};
