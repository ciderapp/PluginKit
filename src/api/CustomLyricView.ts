export interface CustomLyricViewProps {
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
    elStyle?: { [key: string]: string };
}

export function addLyricView(props: CustomLyricViewProps) {
    __PLUGINSYS__.Components.Lyrics.addLyricView(props);
}
