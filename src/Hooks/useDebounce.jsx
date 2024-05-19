import { useRef } from 'react';
export default function useDebounce(fn, delay) {
    const timeRef = useRef();
    return (...args) => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
            timeRef.current = null;
        }
        timeRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
