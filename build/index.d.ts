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

type PAPIEvents = 'app:ready' | 'shell:layout_type_changed' | 'shell:vue:onMounted' | 'shell:vue:onUpdated' | 'shell:vue:onBeforeUpdate' | 'immersive:opened' | 'immersive:closed' | 'miniplayer:opened' | 'miniplayer:closed' | 'browser:page_changed' | 'music:rating_set';

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
declare function useMusicKit(): MusicKit.MusicKitInstance;

declare function useRouter(): any;
declare function getURLParam(name: string): string | null;
declare function useCider(): typeof CiderApp;

interface CustomLyricViewProps {
    /**
     * Top offset of the lyrics view.  Used by Immersive to center the lyrics vertically.
     */
    offsetY?: number;
    /**
     * Are sing lyrics disabled?
     */
    noSingLyrics?: boolean;
    /**
     * Is this view in Immersive mode?
     */
    isImmersive?: boolean;
    /**
     * When lyrics are not found, show a message indicating that no lyrics were found.
     */
    showNoLyricsFoundText?: boolean;
    /**
     * Bound to the :style="" attribute of the lyrics view.
     */
    elStyle?: {
        [key: string]: string;
    };
}
declare function addLyricView(props: CustomLyricViewProps): void;

type LyricProviders = 'Apple Music' | 'musixmatch' | 'NetEase' | 'Unknown';
type LyricTiming = 'Line' | 'Word' | 'None';
type RegisterLyricProviderProps = {
    /**
     * The name of the lyric provider
     */
    name: string;
    /**
     * Does this support translations
     */
    supportsTranslations?: boolean;
    /**
     * Does this support word-by-word syllable timing?
     */
    supportsSingLyrics?: boolean;
    /**
     * The provider to register
     */
    provider: (props: ProviderRequestProps) => Promise<LyricProviderResult>;
};
type ProviderRequestProps = {
    item: MusicKit.Resource;
    useSingLyrics?: boolean;
    useTranslations?: boolean;
};
/**
 * Register a new lyric provider
 * @param opts
 * @returns Removal function
 */
declare function registerLyricProvider(opts: RegisterLyricProviderProps): () => void;
interface Lyric {
    /**
     * The start time of the lyric in seconds
     */
    start: number;
    /**
     * The end time of the lyric in seconds
     */
    end: number;
    /**
     * The text of the lyric
     */
    text: string;
    /**
     * The translation of the lyric (will show under the lyric)
     */
    translation?: string;
    /**
     * Each word in the lyric with their own timing (aka "Sing Lyrics")
     */
    words: Lyric[];
    /**
     * Is this line a duet? (Will show on the left side)
     */
    isDuet?: boolean;
    /**
     * Is this an empty line?
     */
    empty: boolean;
    /**
     * Used primarily for Apple Music lyrics only
     */
    'ttm-agent'?: string;
    /**
     * Used for "role" in Apple Music
     */
    songPart?: string;
    /**
     * Is this word a background vocal?
     */
    isBackground?: boolean;
    /**
     * What lyric index this is
     */
    index?: number;
    /**
     * If this lyric is a credit line
     */
    isCredit?: boolean;
}
type LyricAgents = {
    type: 'person' | 'group' | 'other';
    id: string;
};
type LyricWriters = {
    name: string;
};
type LyricProviderResult = {
    lyrics: Lyric[];
    type: LyricTiming;
};

export { type ComponentNames, type CustomButtonOptions, type CustomImmersiveLayout, type CustomLyricViewProps, ExternalMessages, type Lyric, type LyricAgents, type LyricProviderResult, type LyricProviders, type LyricTiming, type LyricWriters, type MenuItem, type PluginAPI, type ProviderRequestProps, type RegisterLyricProviderProps, addCustomButton, addImmersiveLayout, addImmersiveMenuEntry, addLyricView, addMainMenuEntry, addMediaItemContextMenuEntry, createModal, definePluginContext, getURLParam, registerLyricProvider, removeImmersiveLayout, removeImmersiveLayoutById, saveConfig, subscribeEvent, subscribeEventOnce, unsubscribeEvent, useCider, useCiderAudio, useMessageListener, useMusicKit, useRouter };
