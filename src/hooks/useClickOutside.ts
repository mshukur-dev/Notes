import { useEffect, useRef } from "react";

export function useClickOutside(fn: () => void) {
    const ref = useRef<HTMLDivElement>(null);
    const refFn = useRef(fn);
    useEffect(() => {
        refFn.current = fn;
    });

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                refFn.current();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return ref;
}
