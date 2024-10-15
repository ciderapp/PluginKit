export type LyricProviders = 'Apple Music' | 'musixmatch' | 'NetEase' | 'Unknown';
export type LyricTiming = 'Line' | 'Word' | 'None';

export type RegisterLyricProviderProps = {
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
}

export type ProviderRequestProps = {
    item: MusicKit.Resource;
    useSingLyrics?: boolean;
    useTranslations?: boolean;
}

/**
 * Register a new lyric provider
 * @param opts
 * @returns Removal function
 */
export function registerLyricProvider(opts: RegisterLyricProviderProps) {
    __PLUGINSYS__.Components.Lyrics.registerLyricProvider(opts);
    return () => {
        __PLUGINSYS__.Components.Lyrics.providers = __PLUGINSYS__.Components.Lyrics.providers.filter(p => p !== opts);
    }
}

export interface Lyric {
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

    // Line-specific properties
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

    // Word-specific properties
    /**
     * Is this word a background vocal?
     */
    isBackground?: boolean;

    // Option-specific properties
    /**
     * What lyric index this is
     */
    index?: number;
    /**
     * If this lyric is a credit line
     */
    isCredit?: boolean;
}

export type LyricAgents = {
    type: 'person' | 'group' | 'other';
    id: string;
};

export type LyricWriters = {
    name: string;
};

export type LyricProviderResult = {
    lyrics: Lyric[];
    type: LyricTiming;
}
