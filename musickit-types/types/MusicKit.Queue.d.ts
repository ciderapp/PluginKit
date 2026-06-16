declare namespace MusicKit {

    /**
     * A standard queue item
     */
    interface QueueItems {
        /**
         * Whether the item is an autoplay item or not.
         */
        isAutoplay: boolean;
        /**
         * The media item.
         */
        item: MediaItem;
    }

    /**
     * An array of media items to be played.
     * [MusicKit.js Documentation](https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-queue--page)
     */
    interface Queue {
        /**
         * A Boolean value indicating whether the queue has no items.
         */
        readonly isEmpty: boolean;
        /**
         * An array of all the media items in the queue.
         */
        items: MediaItem[];
        /**
         * The number of items in the queue.
         */
        readonly length: number;
        /**
         * The next playable media item in the queue.
         */
        readonly nextPlayableItem?: MediaItem | undefined;
        /**
         * The next playable index in the queue.
         */
        readonly nextPlayableItemIndex: number;
        /**
         * The current queue position.
         */
        readonly position: number;
        /**
         * The previous playable media item in the queue.
         */
        readonly previousPlayableItem?: MediaItem | undefined;
        /**
         * The previous playable index in the queue.
         */
        readonly previousPlayableItemIndex: number;
        /**
         * @TODO: Add description
         */
        readonly hasAutoplayStation: boolean;
        /**
         * The queue items but with some extra properties.
         */
        _queueItems: QueueItems[];
        /**
         * Reindexes the queue.
         */
        _reindex(): void;

        /**
         * Add an event listener for a MusicKit queue by name.
         *
         * @param name The name of the event.
         * @param callback The callback function to remove.
         */
        addEventListener(name: string, callback: () => any): void;
        /**
         * Inserts the media items defined by the queue descriptor after the last
         * media item in the current queue.
         */
        append(descriptor: Descriptor): void;
        /**
         * Returns the index in the playback queue for a media item descriptor.
         *
         * @param descriptor A descriptor can be an instance of the MusicKit.MediaItem
         * class, or a string identifier.
         */
        indexForItem(descriptor: Descriptor): number;
        /**
         * Returns the media item located in the indicated array index.
         */
        item(index: number): MediaItem | null | undefined;
        /**
         * Inserts the media items defined by the queue descriptor into the current
         * queue immediately after the currently playing media item.
         */
        prepend(descriptor: any): void;
        /**
         * Removes an event listener for a MusicKit queue by name.
         *
         * @param name The name of the event.
         * @param callback The callback function to remove.
         */
        removeEventListener(name: string, callback: () => any): void;
    }
}
