import { useRef, useEffect } from "react";

export const useDebounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {func.apply(this, args); }, timeout);
    };
}

export const usePrevious = (value, defaultParam = '') => {
    const ref = useRef(defaultParam);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}
