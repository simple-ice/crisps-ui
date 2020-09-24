export const debounce = (fn: (...arg: any[]) => any, delay: number) => {
    let timer = NaN;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            fn(...args);
        }, delay);
    }
}