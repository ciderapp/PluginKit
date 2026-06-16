// @ts-nocheck

export function useRouter() {
    const router = useCider().pluginRouter
    if (!router) {
        throw new Error('Plugin router bridge (pod-router) is unavailable on CiderApp.pluginRouter')
    }
    return router
}

export function getURLParam(name: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

export function useCider() {
    return window.CiderApp;
}
