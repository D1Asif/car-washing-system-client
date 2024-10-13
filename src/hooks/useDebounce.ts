/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react"

export const useDebounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const debouncedCallback = (...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            func(...args)
        }, delay)
    }

    return debouncedCallback;
}