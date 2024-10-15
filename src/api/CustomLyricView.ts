export interface CustomLyricViewProps {
    offsetY?: number;
    noSingLyrics?: boolean;
    simpleLyricStyle?: boolean;
    isImmersive?: boolean;
    zoomScale?: number;
    showNoLyricsFoundText?: boolean;
    elStyle?: { [key: string]: string };
    type?: 'lyrics' | 'single-line' | 'basic';
}

export function addLyricView(props: CustomLyricViewProps) {
    __PLUGINSYS__.Components.Lyrics.addLyricView(props);
}
