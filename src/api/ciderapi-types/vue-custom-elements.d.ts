/// <reference path="../../../musickit-types/types/index.d.ts" />

import type { DefineComponent } from 'vue';

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

export {};