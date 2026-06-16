/// <reference path="../musickit-types/types/index.d.ts" />
import { Ref, DefineComponent } from 'vue';

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
    pluginKitVersion?: string;
};

declare function definePluginContext(options: PluginAPI): {
    customElementName: (name: string) => string;
    goToPage: (opts: {
        name: string;
    }) => Promise<void>;
    useCPlugin: () => PluginAPI;
    setupConfig: <T extends Record<string, any>>(defaults: T) => Ref<T>;
    getBundledAssetURL: (path: string) => string;
    plugin: {
        pluginKitVersion: number;
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
};

type CiderAudioEvents = 'ready';
type CiderAudio = {
    store: AudioLabsStore;
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
        audioBands: BiquadFilterNode[] | null;
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
declare class SpatialPreset {
    id: string;
    file: string;
    name: string;
    description: string;
    gainComp: string;
    purchaseDocumentID: string;
}
declare class CARPreset {
    id: string;
    file: string;
    name: string;
    description: string;
}
declare class COCPreset {
    id: string;
    file: string;
    name: string;
    description: string;
    purchaseDocumentID: string;
}
type AudioLabsStore = {
    spatialPresets: SpatialPreset[];
    carPresets: CARPreset[];
    cocPresets: COCPreset[];
    user_ocprofiles: any[];
    user_spprofiles: any[];
};
declare function useCiderAudio(): CiderAudio;

type ComponentNames = "AMPlaybackActions" | "AMQueue" | "MediaItemContextMenu" | "AMVolumeSlider" | "MoreBtn" | "AMPMetadataMojave" | "MediaItemArtwork" | "ContextMenuIcon" | "LyricView" | "AMProgressWidget" | "ImmersiveMetadata" | "ChromeButton" | "ImmersiveLyricView" | "MojavePlayer" | "RichAlbumGrid" | "SimpleLyricView" | "MediaItemSlider" | "MediaItemGrid" | "MediaItem" | "ListItem" | "ListItemShort" | "ListItemScaffold" | "ListItemScroller" | "LCDPlayer" | "LCDPlayerGlass" | "LCDPlayerMavericks" | "LCDPlayerTop" | "HLSVideo" | "HeroItem" | "SuperHeroItem" | "PowerSwoosh" | "PowerSwooshScroller" | "AMTime" | "ArtistChip" | "ArtworkCollection" | "AddToLibraryButton" | "NavigationButton" | "AMPLCD" | "AMPLCDGlass" | "AMProgressBar" | "AMProgressMavericks" | "AMPlayAction" | "AMPrevAction" | "AMNextAction" | "AMShuffleAction" | "AMRepeatAction" | "VolumePopup" | "NIcon" | "SVGIcon" | "CascadeItem" | "QMenuItem" | "PageStackContainer" | "PageStackItem" | "ChromeTop" | "SidebarLabel" | "WinTitleBar" | "QIcon" | "ImmersiveArtwork" | "ImmersiveDrawerContent";

type AnyProps = Record<string, any>;
type NoProps = Record<string, never>;
type CiderCustomElement<Props extends AnyProps = NoProps> = DefineComponent<Props, {}, any>;

type MediaItemProps = {
  item: MusicKit.Resource;
  useInline?: boolean;
  artistRelease?: boolean;
  showTrackCount?: boolean;
};

type MediaItemGridProps = {
  items: MusicKit.Resource[];
  useInline?: boolean;
  artistRelease?: boolean;
};

type MediaItemSliderProps = {
  items: MusicKit.Resource[];
  title?: string;
  subtitle?: string;
  chunkSize?: number;
  url?: string;
  artistRelease?: boolean;
  showTrackCount?: boolean;
};

type ListItemProps = {
  exclude?: string[];
  artistLookup?: boolean;
  item: MusicKit.Resource;
  dense?: boolean;
  active?: boolean;
  index?: string | number;
  provider?: AnyProps;
  resource?: MusicKit.Resource;
};

type ListItemScrollerProps = {
  items?: MusicKit.Resource[];
  title?: string;
  chunkSize?: number;
  artistLookup?: boolean;
  url?: string;
};

type PlaylistEditorProps = {
  items: MusicKit.Resource[];
};

type AMQueueProps = {
  hasTabs?: boolean;
  selectTab?: string;
};

type AddToLibraryButtonProps = {
  item: MusicKit.Resource;
  type?: 'compact' | 'simple' | 'default' | 'standard' | 'chrome';
  qBtnProps?: AnyProps;
  removeIconName?: string;
  removeFontSize?: string;
  removeColor?: string;
  nativeTitle?: boolean;
  hideLabel?: boolean;
};

type AddToPlaylistButtonProps = {
  item: MusicKit.Resource;
};

type NavigationButtonProps = {
  label: string;
  icon?: string;
  path?: string;
  compact?: boolean;
  noDefaultInteract?: boolean;
  interactionType?: string;
};

type RichAlbumGridProps = {
  items: MusicKit.Resource[];
};

type SimpleLyricViewProps = {
  lyricsXml: string;
};

type ImmersiveArtworkProps = {
  noAnimation?: boolean;
};

type CiderElementPropsMap = {
  'cider-cselect': NoProps;
  'cider-cascade-item': NoProps;
  'cider-modal-title-bar': NoProps;
  'cider-cinput': NoProps;
  'cider-cmore-like': NoProps;
  'cider-live-badge': NoProps;
  'cider-playlist-editor': PlaylistEditorProps;
  'cider-new-shell': NoProps;
  'cider-amqueue': AMQueueProps;
  'cider-media-item-context-menu': NoProps;
  'cider-amvolume-slider': NoProps;
  'cider-more-btn': NoProps;
  'cider-ampmetadata-mojave': NoProps;
  'cider-media-item-artwork': NoProps;
  'cider-context-menu-icon': NoProps;
  'cider-context-menu-icon-button': NoProps;
  'cider-playing-indicator': NoProps;
  'cider-lyric-view': NoProps;
  'cider-lyric-dots': NoProps;
  'cider-lyric-line': NoProps;
  'cider-lyric-view-focus': NoProps;
  'cider-lyric-word': NoProps;
  'cider-lyric-word-simple': NoProps;
  'cider-amprogress-widget': NoProps;
  'cider-immersive-metadata': NoProps;
  'cider-chrome-button': NoProps;
  'cider-immersive-lyric-view': NoProps;
  'cider-mojave-player': NoProps;
  'cider-rich-album-grid': RichAlbumGridProps;
  'cider-simple-lyric-view': SimpleLyricViewProps;
  'cider-media-item-slider': MediaItemSliderProps;
  'cider-hero-item-scroller': NoProps;
  'cider-media-item-grid': MediaItemGridProps;
  'cider-media-item': MediaItemProps;
  'cider-lyrics-button': NoProps;
  'cider-queue-button': NoProps;
  'cider-airplay-button': NoProps;
  'cider-plugin-base-button': NoProps;
  'cider-lcdplayer-glass': NoProps;
  'cider-immersive-button': NoProps;
  'cider-mini-player-button': NoProps;
  'cider-list-item': ListItemProps;
  'cider-list-item-short': NoProps;
  'cider-immersive-artwork': ImmersiveArtworkProps;
  'cider-immersive-drawer-content': NoProps;
  'cider-list-item-scaffold': NoProps;
  'cider-list-item-scroller': ListItemScrollerProps;
  'cider-lcdplayer': NoProps;
  'cider-lcdplayer-mavericks': NoProps;
  'cider-lcdplayer-top': NoProps;
  'cider-hlsvideo': NoProps;
  'cider-hero-item': NoProps;
  'cider-super-hero-item': NoProps;
  'cider-power-swoosh': NoProps;
  'cider-power-swoosh-scroller': NoProps;
  'cider-amtime': NoProps;
  'cider-artist-chip': NoProps;
  'cider-artwork-collection': NoProps;
  'cider-add-to-library-button': AddToLibraryButtonProps;
  'cider-add-to-playlist-button': AddToPlaylistButtonProps;
  'cider-ameq': NoProps;
  'cider-explicit': NoProps;
  'cider-glass-player-actions': NoProps;
  'cider-grouping-header': NoProps;
  'cider-grouping-slider': NoProps;
  'cider-grouping-view': NoProps;
  'cider-header-search': NoProps;
  'cider-multi-select-context-menu': NoProps;
  'cider-queue-now-playing': NoProps;
  'cider-start-radio-button': NoProps;
  'cider-navigation-button': NavigationButtonProps;
  'cider-immersive-solarium-player': NoProps;
  'cider-chrome-artwork-blurmap': NoProps;
  'cider-adaptive-color-background': NoProps;
  'cider-app-blurmap': NoProps;
  'cider-amplcd': NoProps;
  'cider-amplayback-actions': NoProps;
  'cider-amplcd-glass': NoProps;
  'cider-amprogress-bar': NoProps;
  'cider-amprogress-mavericks': NoProps;
  'cider-am-tabs-small': NoProps;
  'cider-amplay-action': NoProps;
  'cider-amprev-action': NoProps;
  'cider-amnext-action': NoProps;
  'cider-amshuffle-action': NoProps;
  'cider-amrepeat-action': NoProps;
  'cider-volume-popup': NoProps;
  'cider-nicon': NoProps;
  'cider-svgicon': NoProps;
  'cider-qmenu-item': NoProps;
  'cider-page-stack-container': NoProps;
  'cider-page-stack-item': NoProps;
  'cider-chrome-top': NoProps;
  'cider-sidebar-label': NoProps;
  'cider-sidebar': NoProps;
  'cider-app-scroll-bounds': NoProps;
  'cider-amsidebar': NoProps;
  'cider-amsidebar-min': NoProps;
  'cider-win-title-bar': NoProps;
  'cider-router-view': NoProps;
  'cider-router-link': NoProps;
  'cider-back-nav-button': NoProps;
  'cider-forward-nav-button': NoProps;
  'cider-artwork-blur-map': NoProps;
  'cider-main-menu-button': NoProps;
  'cider-oobeblur-map': NoProps;
  'cider-overlay-scrollbar': NoProps;
  'cider-page-history-content': NoProps;
  'cider-right-drawer-content': NoProps;
  'cider-qmenu-hover': NoProps;
  'cider-command-center': NoProps;
  'cider-new-tab-button': NoProps;
  'cider-three-dqueue': NoProps;
  'cider-coverflow-controls': NoProps;
};

type CiderCustomComponents = {
  [K in keyof CiderElementPropsMap]: CiderCustomElement<CiderElementPropsMap[K]>;
};

declare module 'vue' {
  export interface GlobalComponents extends CiderCustomComponents {}
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends CiderCustomComponents {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CiderElementPropsMap {}
  }
}

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

type MenuItem$1 = {
    label: string;
    icon?: string;
    onClick: (item: any) => void;
};
/**
 * Add a new entry to the main menu
 *
 * @returns a function that removes the entry from the main menu
 */
declare function addMainMenuEntry(item: MenuItem$1): () => void;
/**
 *  Add a new entry to the media item context menu
 *
 * @returns a function that removes the entry from the media item context menu
 */
declare function addMediaItemContextMenuEntry(item: MenuItem$1): () => void;
declare function addImmersiveMenuEntry(item: MenuItem$1): () => void;

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
 * @deprecated MusicKit no longer supported in Cider, use the AppleMusic controller instead
 */
declare function useMusicKit(): null;

type RepeatMode = "none" | "one" | "all";
type PlayItemByIdOptions = {
    type: string;
    id: string;
    options?: PlayItemOptions;
};
type PlayItemByHrefOptions = {
    href: string;
    options?: PlayItemOptions;
};
type PlayItemOptions = {};
/**
 * Controller for Apple Music playback in Cider
 *
 * Internally interfaces with MKLite
 */
declare class AppleMusic {
    static get shuffleMode(): number;
    static get repeatMode(): number;
    static get nowPlayingItem(): unknown;
    static playPause(): void | Promise<void>;
    static play(): void | Promise<void>;
    static pause(): void | Promise<void>;
    static stop(): void | Promise<void>;
    static next(): void | Promise<void>;
    static previous(): void | Promise<void>;
    static setShuffleState(state?: boolean | number): void | Promise<void>;
    static setRepeatState(mode?: number | RepeatMode): void | Promise<void>;
    static playItemById(opts: PlayItemByIdOptions): Promise<void>;
    static playItemByHref(opts: PlayItemByHrefOptions): void | Promise<void>;
}

declare function useRouter(): {
    push(to: string | {
        path: string;
        query?: Record<string, string | number | boolean>;
    }, options?: {
        openInNewTab?: boolean;
        newTabToFront?: boolean;
    }): void;
    back(): void;
};
declare function getURLParam(name: string): string | null;
declare function useCider(): typeof CiderApp;

type DialogWindowStyle = 'generic' | 'none';

type PromptOptions = {
  minLength?: number;
  maxLength?: number;
};

type DialogWindowPosition = 'center';

type ConfirmOptions = {
  okLabel?: string;
  cancelLabel?: string;
  showCancel?: boolean;
};

type DialogProps = {
  seamless?: boolean;
  windowStyle?: DialogWindowStyle;
  component: string;
  componentProps?: Record<string, any>;
  position?: DialogWindowPosition;
  windowClasses?: string | string[];
  windowStyles?: Record<string, string>;
  backdropClasses?: string | string[];
  backdropStyles?: Record<string, string>;
  backdropClose?: boolean;
};

type CiderDialog<T> = {
  show: () => Promise<T>;
  close: () => void;
};

declare function createDialog<T>(props: DialogProps): CiderDialog<T>;

declare function createAlertOptions(options: { message: string; title?: string }): Promise<void>;

declare function createAlert(message: string, title?: string): Promise<void>;

declare function createConfirm(message: string, title?: string, opts?: ConfirmOptions): Promise<boolean | null>;

declare function createPrompt(message: string, title?: string, opts?: PromptOptions): Promise<string | null>;

type Dialog_CiderDialog<T> = CiderDialog<T>;
type Dialog_ConfirmOptions = ConfirmOptions;
type Dialog_DialogProps = DialogProps;
type Dialog_DialogWindowPosition = DialogWindowPosition;
type Dialog_DialogWindowStyle = DialogWindowStyle;
type Dialog_PromptOptions = PromptOptions;
declare const Dialog_createAlert: typeof createAlert;
declare const Dialog_createAlertOptions: typeof createAlertOptions;
declare const Dialog_createConfirm: typeof createConfirm;
declare const Dialog_createDialog: typeof createDialog;
declare const Dialog_createPrompt: typeof createPrompt;
declare namespace Dialog {
  export { type Dialog_CiderDialog as CiderDialog, type Dialog_ConfirmOptions as ConfirmOptions, type Dialog_DialogProps as DialogProps, type Dialog_DialogWindowPosition as DialogWindowPosition, type Dialog_DialogWindowStyle as DialogWindowStyle, type Dialog_PromptOptions as PromptOptions, Dialog_createAlert as createAlert, Dialog_createAlertOptions as createAlertOptions, Dialog_createConfirm as createConfirm, Dialog_createDialog as createDialog, Dialog_createPrompt as createPrompt };
}

declare const DialogAPI: typeof Dialog;

declare namespace Cider {
    namespace ContextMenu {
        interface MenuItem {
            label: string;
            icon?: string; // Assuming ContextMenuIcons will be represented as strings externally
            type?: 'normal' | 'separator';
            onClick?: () => void;
            children?: MenuItem[];
            actionId?: string;
            enabled?: boolean;
            toolTip?: string;
            accelerator?: string;
            sublabel?: string;
            checked?: boolean;
        }

        interface ContextMenu {
            items: MenuItem[];
            itemsFunction?: () => MenuItem[];
            x?: number;
            y?: number;
            show: (e: MouseEvent) => void;
            setItems: (items: (MenuItem | false)[]) => this;
            addItem: (item: MenuItem | false) => this;
        }
    }
}

type ContextMenuIcons = string; // Or a more specific string literal union if NucleoIcons keys are known and stable

type SetMenuItem = Cider.ContextMenu.MenuItem | false;

type SetMenuItems = SetMenuItem[] | (() => SetMenuItem[]);

type FrontendMenuItem = Cider.ContextMenu.MenuItem & { icon?: ContextMenuIcons };

interface CreateMenuInitHelper {
    actionItem: typeof actionItem;
    createMenuItem: typeof createMenuItem;
    toggleItem: typeof toggleItem;
    menuSeperator: typeof menuSeperator;
    cascadeItem: typeof cascadeItem;
    $i: (key: string, replacements?: Record<string, string>) => string; // Assuming $i and $lz return strings
    $lz: (key: string, replacements?: Record<string, string>) => string;
}

type CreateMenuFn = (helpers: CreateMenuInitHelper) => SetMenuItems;

declare function createMenu(init: CreateMenuFn): Menu;

declare function createMenuItem(label: string, props?: Partial<FrontendMenuItem>, children?: FrontendMenuItem[]): MenuItem;

declare function menuSeperator(): MenuItem;

declare function actionItem(label: string, onClick?: () => void, props?: Partial<FrontendMenuItem>): MenuItem;

declare function toggleItem(label: string, checked?: boolean, onClick?: () => void, props?: Partial<FrontendMenuItem>): MenuItem;

declare function cascadeItem(label: string, items?: SetMenuItem[], props?: Partial<FrontendMenuItem>): MenuItem;

interface Menu extends Cider.ContextMenu.ContextMenu {
    new(items?: SetMenuItems): Menu;
    items: Cider.ContextMenu.MenuItem[];
    itemsFunction: () => Cider.ContextMenu.MenuItem[];
    x: number;
    y: number;
    show(e: MouseEvent): void;
    setItems(items: SetMenuItem[]): this;
    addItem(item: Cider.ContextMenu.MenuItem | false): this;
}

declare const Menu: Menu;

interface MenuItem extends Cider.ContextMenu.MenuItem {
    new(label?: string, props?: Partial<Cider.ContextMenu.MenuItem & { icon?: ContextMenuIcons }>, children?: Cider.ContextMenu.MenuItem[]): MenuItem;
    label: string;
    icon?: ContextMenuIcons;
    type: 'normal' | 'separator';
    onClick: () => void;
    children?: Cider.ContextMenu.MenuItem[];
    actionId: string;
    enabled: boolean;
    toolTip?: string | undefined;
    accelerator?: string | undefined;
    sublabel?: string | undefined;
    checked?: boolean | undefined;
    setLabel(label: string): this;
    setIcon(icon: ContextMenuIcons): this;
    setType(type: 'normal' | 'separator'): this;
    setOnClick(onClick: () => void): this;
    setChecked(checked: boolean): this;
    setEnabled(enabled: boolean): this;
    setItems(items: SetMenuItem[]): this;
    addItem(item: SetMenuItem): this;
}
declare const MenuItem: MenuItem;

interface Seperator extends MenuItem {
    new(): Seperator;
    type: 'separator';
}
declare const Seperator: Seperator;

type Ctx_ContextMenuIcons = ContextMenuIcons;
type Ctx_CreateMenuFn = CreateMenuFn;
type Ctx_CreateMenuInitHelper = CreateMenuInitHelper;
type Ctx_FrontendMenuItem = FrontendMenuItem;
declare const Ctx_Menu: typeof Menu;
declare const Ctx_MenuItem: typeof MenuItem;
declare const Ctx_Seperator: typeof Seperator;
type Ctx_SetMenuItem = SetMenuItem;
type Ctx_SetMenuItems = SetMenuItems;
declare const Ctx_actionItem: typeof actionItem;
declare const Ctx_cascadeItem: typeof cascadeItem;
declare const Ctx_createMenu: typeof createMenu;
declare const Ctx_createMenuItem: typeof createMenuItem;
declare const Ctx_menuSeperator: typeof menuSeperator;
declare const Ctx_toggleItem: typeof toggleItem;
declare namespace Ctx {
  export { type Ctx_ContextMenuIcons as ContextMenuIcons, type Ctx_CreateMenuFn as CreateMenuFn, type Ctx_CreateMenuInitHelper as CreateMenuInitHelper, type Ctx_FrontendMenuItem as FrontendMenuItem, Ctx_Menu as Menu, Ctx_MenuItem as MenuItem, Ctx_Seperator as Seperator, type Ctx_SetMenuItem as SetMenuItem, type Ctx_SetMenuItems as SetMenuItems, Ctx_actionItem as actionItem, Ctx_cascadeItem as cascadeItem, Ctx_createMenu as createMenu, Ctx_createMenuItem as createMenuItem, Ctx_menuSeperator as menuSeperator, Ctx_toggleItem as toggleItem };
}

declare const ContextMenuAPI: typeof Ctx;
type UseContextMenuOptions = {
    elementRef: Ref<HTMLElement | undefined>;
};
type UseContextMenu = (menu: Menu, opts?: UseContextMenuOptions) => {
    elementRef: Ref<HTMLElement | undefined>;
    setElementRef: (el: HTMLElement | undefined) => void;
    showContextMenu: (event: MouseEvent | Event) => void;
    menu: Menu;
};
declare const useContextMenu: UseContextMenu;

interface v3Params {
    queryParams?: MusicKit.QueryParameters;
    total?: number;
    totalHref?: string;
    update?: (progress: number) => void;
    verbose?: boolean;
    apiType?: keyof MusicKit.v3;
}
declare function v3<T>(url: string, args?: MusicKit.QueryParameters | v3Params, opts?: MusicKit.QueryOptions & {
    paramsInURL?: boolean;
}, apiType?: keyof MusicKit.v3): Promise<MusicKit.QueryResponse<T>>;
declare function v3Turbo<T>(route: string, args?: v3Params): Promise<T>;

export { AppleMusic, CARPreset, COCPreset, type ComponentNames, ContextMenuAPI, type CustomButtonOptions, type CustomImmersiveLayout, DialogAPI, ExternalMessages, type MenuItem$1 as MenuItem, type PluginAPI, SpatialPreset, addCustomButton, addImmersiveLayout, addImmersiveMenuEntry, addMainMenuEntry, addMediaItemContextMenuEntry, createModal, definePluginContext, getURLParam, removeImmersiveLayout, removeImmersiveLayoutById, saveConfig, subscribeEvent, subscribeEventOnce, unsubscribeEvent, useCider, useCiderAudio, useContextMenu, useMessageListener, useMusicKit, useRouter, v3, v3Turbo };
