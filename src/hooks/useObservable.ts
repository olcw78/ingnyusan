import { useEffect, useState } from "react";
import { Observable, OperatorFunction } from "rxjs";

interface UseObservableParameters<From, Return = From> {
  observable$: Observable<From>;
  pipe: OperatorFunction<From, Return>;
  executeFn?: (value: Return) => void;
}

export function useObservable<T>({
  observable$,
  executeFn
}: Omit<UseObservableParameters<T>, "pipe">) {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const unsub = observable$.subscribe((observer) => executeFn?.(observer));
    return () => unsub?.unsubscribe();
  }, [state, observable$]);

  return state;
}

export function useObservableWithPipe<From, Return = From>({
  observable$,
  executeFn,
  pipe
}: UseObservableParameters<From, Return>) {
  const [state, setState] = useState<Return>();

  useEffect(() => {
    const unsub = observable$
      .pipe(pipe)
      .subscribe((observer) => executeFn?.(observer));
    return () => unsub?.unsubscribe();
  }, [state, observable$]);

  return state;
}
