import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string, 
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  });

  useEffect(() => {
    if (value === undefined) return window.localStorage.removeItem(key);
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}