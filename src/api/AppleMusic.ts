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

type AppleMusicStoreLike = {
  player: {
    playItemByID(id: string, trackData?: unknown): Promise<void>;
  } | null;
  audioElement: HTMLAudioElement;
  nowPlayingItem: unknown;
  shuffleMode: number;
  repeatMode: RepeatMode;
  isPlaying: boolean;
  play(): void | Promise<void>;
  pause(): void | Promise<void>;
  stop(): void | Promise<void>;
  playpause(): void | Promise<void>;
  skipToNext(): void | Promise<void>;
  skipToPrevious(): void | Promise<void>;
  setShuffleMode(enabled: boolean): void | Promise<void>;
  setRepeatMode(mode: RepeatMode): void | Promise<void>;
  playItemByHref(href: string): void | Promise<void>;
  ensurePlayer(): void | Promise<void>;
};

function getAppleMusicStore(): AppleMusicStoreLike {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = (globalThis as any)?.__PLUGINSYS__?.Stores?.appleMusicStore;
  if (!store) {
    throw new Error("Plugin AppleMusic is unavailable: __PLUGINSYS__.Stores.appleMusicStore was not initialized by Cider host.");
  }
  return store as AppleMusicStoreLike;
}

function toRepeatMode(mode: number | RepeatMode): RepeatMode {
  if (mode === "none" || mode === "one" || mode === "all") {
    return mode;
  }
  if (mode === 1) {
    return "one";
  }
  if (mode === 2) {
    return "all";
  }
  return "none";
}

function toRepeatModeNumber(mode: RepeatMode): number {
  if (mode === "one") {
    return 1;
  }
  if (mode === "all") {
    return 2;
  }
  return 0;
}

function typeToHref(type: string, id: string): string {
  const cleaned = `${type}`.trim().toLowerCase();
  const normalized = cleaned.endsWith("s") ? cleaned : `${cleaned}s`;
  return `https://music.apple.com/us/${normalized}/_/` + encodeURIComponent(id);
}

/**
 * Controller for Apple Music playback in Cider
 *
 * Internally interfaces with MKLite
 */
export class AppleMusic {
  static get shuffleMode() {
    return getAppleMusicStore().shuffleMode;
  }

  static get repeatMode() {
    return toRepeatModeNumber(getAppleMusicStore().repeatMode);
  }

  static get nowPlayingItem() {
    return getAppleMusicStore().nowPlayingItem;
  }

  static playPause() {
    return getAppleMusicStore().playpause();
  }

  static play() {
    return getAppleMusicStore().play();
  }

  static pause() {
    return getAppleMusicStore().pause();
  }

  static stop() {
    return getAppleMusicStore().stop();
  }

  static next() {
    return getAppleMusicStore().skipToNext();
  }

  static previous() {
    return getAppleMusicStore().skipToPrevious();
  }

  static setShuffleState(state?: boolean | number) {
    const store = getAppleMusicStore();
    const enabled = typeof state === "boolean" ? state : typeof state === "number" ? state > 0 : store.shuffleMode === 0;
    return store.setShuffleMode(enabled);
  }

  static setRepeatState(mode?: number | RepeatMode) {
    const store = getAppleMusicStore();
    const nextMode = mode === undefined
      ? store.repeatMode === "none"
        ? "one"
        : store.repeatMode === "one"
          ? "all"
          : "none"
      : toRepeatMode(mode);

    return store.setRepeatMode(nextMode);
  }

  static async playItemById(opts: PlayItemByIdOptions) {
    const store = getAppleMusicStore();
    await store.ensurePlayer();
    const href = typeToHref(opts.type, opts.id);
    return store.playItemByHref(href);
  }

  static playItemByHref(opts: PlayItemByHrefOptions) {
    return getAppleMusicStore().playItemByHref(opts.href);
  }
}
