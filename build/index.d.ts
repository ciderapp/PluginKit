import { Ref } from 'vue';

type PluginAPI = {
    setup(): void;
    name: string;
    identifier: string;
    ce_prefix?: string;
    description: string;
    version: string;
    author: string;
    repo: string;
    SettingsElement?: string;
    CustomElements?: {
        [key: string]: any;
    };
};

declare function definePluginContext(options: PluginAPI): {
    customElementName: (name: string) => string;
    goToPage: (opts: {
        name: string;
    }) => Promise<any>;
    useCPlugin: () => PluginAPI;
    setupConfig: <T extends Record<string, any>>(defaults: T) => Ref<T>;
    plugin: PluginAPI;
};

type CiderAudioEvents = 'ready';
type CiderAudio = {
    context: AudioContext | null;
    fetchBufferCache: {
        [key: string]: ArrayBuffer;
    };
    source: MediaElementAudioSourceNode | null;
    audioNodes: {
        gainNode: GainNode | null;
        airplaygainNode: GainNode | null;
        spatialNode: ConvolverNode | null;
        airplayMuteAudioNode: GainNode | null;
        audioBands: BiquadFilterNode | null;
        vibrantbassNode: BiquadFilterNode | null;
        llpw: BiquadFilterNode | null;
        recorderNode: AudioWorkletNode | null;
        intelliGainComp: GainNode | null;
        atmosphereRealizer2: ConvolverNode | null;
        atmosphereRealizer1: ConvolverNode | null;
        opportunisticCorrection: ConvolverNode | null;
    };
    vibrantBass: {
        frequencies: number[];
        gain: number[];
        Q: number[];
    };
    ccON: boolean;
    mediaRecorder: any;
    init: (cb?: () => void) => void;
    _events: {
        [event: string]: Array<{
            callback: (data: any) => void;
            opts: {
                once: boolean;
            };
        }>;
    };
    dispatchEvent: (event: CiderAudioEvents, data: any) => void;
    subscribe: (event: CiderAudioEvents, callback: (data: any) => void, opts?: {
        once: boolean;
    }) => void;
};
declare function useCiderAudio(): CiderAudio;

type ComponentNames = "AMPlaybackActions" | "AMQueue" | "MediaItemContextMenu" | "AMVolumeSlider" | "MoreBtn" | "AMPMetadataMojave" | "MediaItemArtwork" | "ContextMenuIcon" | "LyricView" | "AMProgressWidget" | "ImmersiveMetadata" | "ChromeButton" | "ImmersiveLyricView" | "MojavePlayer" | "RichAlbumGrid" | "SimpleLyricView" | "MediaItemSlider" | "MediaItemGrid" | "MediaItem" | "ListItem" | "ListItemShort" | "ListItemScaffold" | "ListItemScroller" | "LCDPlayer" | "LCDPlayerGlass" | "LCDPlayerMavericks" | "LCDPlayerTop" | "HLSVideo" | "HeroItem" | "SuperHeroItem" | "PowerSwoosh" | "PowerSwooshScroller" | "AMTime" | "ArtistChip" | "ArtworkCollection" | "AddToLibraryButton" | "NavigationButton" | "AMPLCD" | "AMPLCDGlass" | "AMProgressBar" | "AMProgressMavericks" | "AMPlayAction" | "AMPrevAction" | "AMNextAction" | "AMShuffleAction" | "AMRepeatAction" | "VolumePopup" | "NIcon" | "SVGIcon" | "CascadeItem" | "QMenuItem" | "PageStackContainer" | "PageStackItem" | "ChromeTop" | "SidebarLabel" | "WinTitleBar" | "QIcon" | "ImmersiveArtwork" | "ImmersiveDrawerContent";

declare function saveConfig(): Promise<any>;

type CustomButtonOptions = {
    location: 'chrome-top/right' | 'mojave/player/right';
    /**
     * Will be sent to innerHTML of the button
     */
    element: string;
    menuElement?: string;
    ctxMenuElement?: string;
    title: string;
    onClick?: (e: MouseEvent) => void;
    onContextMenu?: (e: MouseEvent) => void;
};
declare function addCustomButton(opts: CustomButtonOptions): void;

type PAPIEvents = 'app:ready' | 'shell:layout_type_changed' | 'immersive:opened' | 'immersive:closed' | 'miniplayer:opened' | 'miniplayer:closed' | 'browser:page_changed';

/**
 * Subscribe to a PAPI event
 *
 * @param event - The event to subscribe to
 * @param cb - The callback to run when the event is emitted
 * @param opts - Options for the event listener
 * @returns A function to unsubscribe from the event
 *
 */
declare function subscribeEvent<T>(event: PAPIEvents, cb: (e: T) => void, opts?: Partial<{
    once: boolean;
    passive: boolean;
    capture: boolean;
}>): () => void;
/**
 * Wrapper for subscribing to an event once
 */
declare function subscribeEventOnce<T>(event: PAPIEvents, cb: (e: T) => void): () => void;
declare function unsubscribeEvent<T>(event: PAPIEvents, cb: (e: T) => void): void;

type CustomImmersiveLayout = {
    name: string;
    identifier: string;
    component: string;
    type?: 'normal' | 'portrait';
};
declare function addImmersiveLayout(layout: CustomImmersiveLayout): void;
declare function removeImmersiveLayout(layout: CustomImmersiveLayout): void;
declare function removeImmersiveLayoutById(identifier: string): void;

type MenuItem = {
    label: string;
    icon?: string;
    onClick: (item: any) => void;
};
/**
 * Add a new entry to the main menu
 *
 * @returns a function that removes the entry from the main menu
 */
declare function addMainMenuEntry(item: MenuItem): () => void;
/**
 *  Add a new entry to the media item context menu
 *
 * @returns a function that removes the entry from the media item context menu
 */
declare function addMediaItemContextMenuEntry(item: MenuItem): () => void;
declare function addImmersiveMenuEntry(item: MenuItem): () => void;

/**
 * Direct access to the external messaging system.
 *
 * This is a direct reference to the external messaging system, which allows you to send and receive messages from other plugins, the main application, or external sources.
 *
 * @example
 * ```ts
 * ExternalMessages.addEventListener('my-identifier:my-event', (e) => {
 *   console.log('Event triggered!', e)
 * })
 * ```
 */
declare const ExternalMessages: {
    addEventListener(event: string, cb: (e: any) => void, opts?: Partial<{
        once: boolean;
        passive: boolean;
        capture: boolean;
    }>): void;
    removeEventListener(event: string, cb: (e: any) => void): void;
    dispatchEvent(event: string, data: any): void;
};
/**
 * Message listener composable
 *
 * This composable allows you to listen for messages sent from other plugins, the main application, or external sources.
 *
 * Will automatically remove the event listener when the component is unmounted.
 *
 * @param eventName The name of the event to listen for.
 * @param callback The callback to run when the event is triggered.
 * @param opts Options for the event listener.
 *
 * @returns A function to remove the event listener.
 *
 * @example
 * ```ts
 * const removeListener = useMessageListener('my-identifier:my-event', (e) => {
 *    console.log('Event triggered!', e)
 * })
 * ```
 */
declare function useMessageListener(eventName: string, callback: (e: any) => void, opts?: Partial<{
    once: boolean;
    passive: boolean;
    capture: boolean;
}>): () => void;

type BuiltInClasses = 'fullscreen' | (string & {});
type CreateModalOptions = {
    escClose?: boolean;
    className?: BuiltInClasses[];
    noDefaultClass?: boolean;
    element?: HTMLElement;
};
declare function createModal(opts: CreateModalOptions): {
    openDialog: () => void;
    closeDialog: () => void;
    dialogElement: HTMLDialogElement;
    addClass: (className: BuiltInClasses) => void;
};

/**
 * MusicKit JS API
 *
 * Learn more at https://developer.apple.com/documentation/musickitjs
 */
declare function useMusicKit(): any;

declare function useRouter(): any;
declare function getURLParam(name: string): string | null;
declare function useCider(): typeof CiderApp;

export { type ComponentNames, type CustomButtonOptions, type CustomImmersiveLayout, ExternalMessages, type MenuItem, type PluginAPI, addCustomButton, addImmersiveLayout, addImmersiveMenuEntry, addMainMenuEntry, addMediaItemContextMenuEntry, createModal, definePluginContext, getURLParam, removeImmersiveLayout, removeImmersiveLayoutById, saveConfig, subscribeEvent, subscribeEventOnce, unsubscribeEvent, useCider, useCiderAudio, useMessageListener, useMusicKit, useRouter };
