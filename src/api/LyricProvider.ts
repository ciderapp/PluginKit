export type LyricProviders = 'Apple Music' | 'musixmatch' | 'NetEase' | 'Unknown';
export type LyricTiming = 'Line' | 'Word' | 'None';

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
}

type ProviderRequestProps = {
    item: MusicKit.Resource;
    useSingLyrics?: boolean;
    useTranslations?: boolean;
}

export function registerLyricProvider(opts: RegisterLyricProviderProps) {
    opts;
}

export interface Lyric {
    start: number;
    end: number;
    text: string;
    translation?: string;
    words: Lyric[];

    // Line-specific properties
    isDuet?: boolean;
    empty: boolean;
    'ttm-agent'?: string;
    songPart?: string;

    // Word-specific properties
    isBackground?: boolean;

    // Option-specific properties
    index?: number;
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
