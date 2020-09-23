export const debounce = (fn: (...arg) => void, delay: number) => {
    let timer = NaN;
    return (...args) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            fn(args);
        }, delay);
    }
}