export function isViteDev() {
    // @ts-ignore
    return typeof window.__VUE_HMR_RUNTIME__ == 'object';
}
