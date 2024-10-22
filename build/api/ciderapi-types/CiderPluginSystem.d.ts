interface RenderComponentOptions {
    component: import('../ComponentNames').ComponentNames;
    props?: Record<string, any>;
    // @ts-ignore
    element: Element;
}


declare namespace __PLUGINSYS__ {
    const Components: {
        MainMenu: {
            addMenuItem(item: import("../MenuEntry").MenuItem): import("../MenuEntry").MenuItem
            removeMenuItem(item: import("../MenuEntry").MenuItem): void
            items: import("../MenuEntry").MenuItem[]
        },
        Lyrics: {
            registerLyricProvider(opts: import('../LyricProvider').RegisterLyricProviderProps): void
            addLyricView(props: import('../CustomLyricView').CustomLyricViewProps): void
            providers: import('../LyricProvider').RegisterLyricProviderProps[]
        },
        ImmersiveMenu: {
            addMenuItem(item: import("../MenuEntry").MenuItem): import("../MenuEntry").MenuItem
            removeMenuItem(item: import("../MenuEntry").MenuItem): void
            items: import("../MenuEntry").MenuItem[]
        },
        ImmersiveLayouts: {
            addLayout(layout: import("../ImmersiveLayout.ts").CustomImmersiveLayout): void
            removeLayout(layout: import("../ImmersiveLayout.ts").CustomImmersiveLayout): void
            layouts: import("../ImmersiveLayout.ts").CustomImmersiveLayout[]
        },
        MediaItemContextMenu: {
            addMenuItem(item: import("../MenuEntry").MenuItem): import("../MenuEntry").MenuItem
            removeMenuItem(item: import("../MenuEntry").MenuItem): void
            removeLayoutByIdentifier(identifier: string): void
            items: import("../MenuEntry").MenuItem[]
        },
        CustomButtons: {
            addCustomButton(opts: import("../CustomButton").CustomButtonOptions): void
            removeCustomButton(opts: import("../CustomButton").CustomButtonOptions): void
            buttons: import("../CustomButton").CustomButtonOptions[]
        }
    }

    const ExternalMessages: {
        addEventListener(event: string, cb: (e: any) => void, opts?: Partial<{ once: boolean, passive: boolean, capture: boolean }>): void
        removeEventListener(event: string, cb: (e: any) => void): void
        dispatchEvent(event: string, data: any): void
    }

    const Quasar: {
        Dialog: any;
    }

    const IZAPI: {
        mDNS: {
            createBrowser(tcp_service: string, timeout: number): {
                addresses: string[]
                fullname: string
                host: string
                interfaceIndex: number
                port: number
                query: string[]
                txt: string[]
                type: {
                    name: string
                    protocol: string
                    subtypes: string[]
                }[]
            }[]
        }
    }

    const PAPIInstance: {
        addEventListener(event: import('./PAPIEvents').PAPIEvents, cb: (e: any) => void, opts?: Partial<{ once: boolean, passive: boolean, capture: boolean }>): void
        removeEventListener(event: import('./PAPIEvents').PAPIEvents, cb: (e: any) => void): void
    }

    const App: {
        Components: import('../ComponentNames').ComponentNames[]
        RenderComponent: (opts: RenderComponentOptions) => void
        vue: {
            // @ts-ignore
            render: (component: any, element: Element) => void
            h: (component: any, props: Record<string, any>, children: any) => void
        }
    }
}
