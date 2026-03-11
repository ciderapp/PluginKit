// A good amount of this is currently pseudo code while we do the actual implementation

// @ts-ignore Does not exist yet
const appleMusicStore = __PLUGINSYS__.Stores.appleMusicStore;

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
export class AppleMusic {
  private static mklite: any;

  get shuffleMode() {
    return appleMusicStore.shuffleMode;
  }

  get repeatMode() {
    return appleMusicStore.repeatMode;
  }

  get nowPlayingItem() {
    return appleMusicStore.nowPlayingItem;
  }

  static playPause() {}
  static play() {}
  static pause() {}
  static stop() {}
  static next() {}
  static previous() {}
  static setShuffleState() {}
  static setRepeatState() {}
  static playItemById(opts: PlayItemByIdOptions) {}
  static playItemByHref(opts: PlayItemByHrefOptions) {}
}
