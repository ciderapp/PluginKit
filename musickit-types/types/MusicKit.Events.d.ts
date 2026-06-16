declare namespace MusicKit {
  /**
   * A dictionary containing events for a MusicKit instance.
   */
  interface Events {
    /**
     * A notification name indicating a change in the authorization status.
     */
    authorizationStatusDidChange: { authorizationStatus: AuthStatus[keyof AuthStatus] };
    /**
     * A notification name indicating an upcoming change in the authorization status.
     */
    authorizationStatusWillChange: unknown;
    /**
     * A notification name indicating a user is eligible for a subscribe view.
     */
    eligibleForSubscribeView: unknown;
    /**
     * A notification name indicating MusicKit JS is loaded.
     */
    loaded: unknown;
    /**
     * A notification name indicating the player has obtained enough data for
     * playback to start.
     */
    mediaCanPlay: unknown;
    /**
     * A notification name indicating that the currently-playing media item has
     * changed.
     */
    mediaItemStateDidChange: MediaItem;
    /**
     * A notification name indicating the currently-playing media item is about
     * to change.
     */
    mediaItemStateWillChange: MediaItem;
    /**
     * A notification name indicating that the player has thrown an error during
     * playback.
     */
    mediaPlaybackError: { message: string };
    /**
     * A notification name indicating the media item's metadata has finished
     * loading.
     */
    metadataDidChange: unknown;
    /**
     * A notification indicating the playback bit rate has changed.
     */
    playbackBitrateDidChange: { bitrate: number };
    /**
     * A notification name indicating the current playback duration changed.
     */
    playbackDurationDidChange: unknown;
    /**
     * Buffering progress changed.
     */
    bufferedProgressDidChange: { progress: number };
    /**
     * A notification name indicating the current playback progress changed.
     */
    playbackProgressDidChange: { progress: number };
    /**
     * A notification indicating the playback state has changed.
     */
    playbackStateDidChange: { nowPlayingItem: MusicKit.MediaItem; oldState: PlaybackStates; state: PlaybackStates };
    /**
     * A notification indicating the playback state is about to be changed.
     */
    playbackStateWillChange: { nowPlayingItem: MusicKit.MediaItem; oldState: PlaybackStates; state: PlaybackStates };
    /**
     * A notification indicating that a playback target's availability has changed.
     */
    playbackTargetAvailableDidChange: unknown;
    /**
     * A notification name indicating the current playback time has changed.
     */
    playbackTimeDidChange: { currentPlaybackDuration: number; currentPlaybackTime: number; currentPlaybackTimeRemaining: number; };
    /**
     * A notification name indicating the player volume has changed.
     */
    playbackVolumeDidChange: Event;
    /**
     * A notification name indicating the playback has started in another context
     * on your domain, and the current player has stopped playback.
     */
    primaryPlayerDidChange: unknown;
    /**
     * A notification name indicating that the items in the current playback
     * queue have changed.
     */
    queueItemsDidChange: MediaItem[];
    /**
     * A notification name indicating that the current queue position has changed.
     */
    queuePositionDidChange: { oldPosition: number; position: number };
    /**
     * A notification name indicating a change in the storefront country code.
     */
    storefrontCountryCodeDidChange: unknown;
    /**
     * A notification name indicating that the device's inferred storefront
     * identifier changed.
     */
    storefrontIdentifierDidChange: unknown;
    /**
     * A notification name indicating the user token changed.
     */
    userTokenDidChange: { userToken: string };
    /**
     * A notification name indicating the currently playing item has changed.
     */
    nowPlayingItemDidChange: { item: Resource };
    /**
     * A notification name indicating if the repeat mode did change.
     */
    repeatModeDidChange: PlayerRepeatMode;
    /**
     * A notification name indicating if the shuffle mode did change.
     */
    shuffleModeDidChange: PlayerShuffleMode;
    /**
     * A notification name indicating if the autoplay mode did change.
     */
    autoplayEnabledDidChange: boolean;
    /**
     * The timed metadata changed.
     */
    timedMetadataDidChange: {
      album: string;
      blob: Blob;
      links: { description: string, url: string }[];
      performer: string;
      storefrontAdamIds: { [id: string]: string };
      title: string;
      _adamId: string;
    };

    /**
     * A notification name indicating that the media element has been created.
     */
    mediaElementCreated: { mediaElement: unknown };
  }
}
