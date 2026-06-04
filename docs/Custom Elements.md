# Custom Elements Reference

This guide documents every non-Quasar custom element currently registered by Cider and exposed to plugin templates.

## How to use these components

1. Use the tags directly in your Vue template, for example `<cider-media-item />`.
2. Pass object/array props with `:` bindings.
3. Most tags are host UI wrappers with no public prop contract; use them as visual/structural elements unless listed in the typed section below.
4. Components and behavior can change between Cider builds; prefer defensive checks around data and plugin state.

## Components with known props

### cider-add-to-library-button

Type map: `AddToLibraryButtonProps`

Action button for adding/removing an item in library.

| Prop | Type | Notes |
| --- | --- | --- |
| `item` | `MusicKit.Resource` | Required resource to add/remove. |
| `type` | `'compact' | 'simple' | 'default' | 'standard' | 'chrome'` | Visual style variant. |
| `qBtnProps` | `Record<string, any>` | Forwarded button props. |
| `removeIconName` | `string` | Icon used in remove state. |
| `removeFontSize` | `string` | Remove icon font size. |
| `removeColor` | `string` | Remove state color. |
| `nativeTitle` | `boolean` | Use native title tooltip behavior. |
| `hideLabel` | `boolean` | Hide visible button label. |

Example:

```vue
<cider-add-to-library-button
	:item="item"
	type="compact"
	:hide-label="true"
/>
```

### cider-add-to-playlist-button

Type map: `AddToPlaylistButtonProps`

Action button for adding an item to playlist.

| Prop | Type | Notes |
| --- | --- | --- |
| `item` | `MusicKit.Resource` | Required resource to add. |

Example:

```vue
<cider-add-to-playlist-button
	:item="item"
/>
```

### cider-amqueue

Type map: `AMQueueProps`

Displays Apple Music queue panel UI.

| Prop | Type | Notes |
| --- | --- | --- |
| `hasTabs` | `boolean` | Show queue tabs when true. |
| `selectTab` | `string` | Initial tab identifier. |

Example:

```vue
<cider-amqueue
	:has-tabs="true"
	select-tab="up-next"
/>
```

### cider-immersive-artwork

Type map: `ImmersiveArtworkProps`

Artwork region used in immersive views.

| Prop | Type | Notes |
| --- | --- | --- |
| `noAnimation` | `boolean` | Disable artwork animation effects. |

Example:

```vue
<cider-immersive-artwork
	:no-animation="true"
/>
```

### cider-list-item

Type map: `ListItemProps`

Renders a list row for a MusicKit item.

| Prop | Type | Notes |
| --- | --- | --- |
| `item` | `MusicKit.Resource` | Required resource for the row. |
| `exclude` | `string[]` | Optional list of sub-fields to hide. |
| `artistLookup` | `boolean` | Enable artist resolution behavior. |
| `dense` | `boolean` | Render with compact spacing. |
| `active` | `boolean` | Mark row as active/selected. |
| `index` | `string | number` | Optional visual index value. |
| `provider` | `Record<string, any>` | Optional provider object. |
| `resource` | `MusicKit.Resource` | Optional override resource object. |

Example:

```vue
<cider-list-item
	:item="item"
	:dense="true"
	:index="1"
/>
```

### cider-list-item-scroller

Type map: `ListItemScrollerProps`

Renders a vertical list scroller with optional heading.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `MusicKit.Resource[]` | Optional list of resources. |
| `title` | `string` | Optional section title. |
| `chunkSize` | `number` | Optional chunk size. |
| `artistLookup` | `boolean` | Enable artist lookup behavior. |
| `url` | `string` | Optional navigation target for header action. |

Example:

```vue
<cider-list-item-scroller
	title="Queue"
	:items="items"
/>
```

### cider-media-item

Type map: `MediaItemProps`

Renders a single media lockup card for an item resource.

| Prop | Type | Notes |
| --- | --- | --- |
| `item` | `MusicKit.Resource` | Required media item resource. |
| `useInline` | `boolean` | Render inline interaction behavior. |
| `artistRelease` | `boolean` | Treat item as an artist release card. |
| `showTrackCount` | `boolean` | Show track count metadata when available. |

Example:

```vue
<cider-media-item
	:item="item"
	:use-inline="true"
/>
```

### cider-media-item-grid

Type map: `MediaItemGridProps`

Renders a responsive grid of media items.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `MusicKit.Resource[]` | Required list of resources. |
| `useInline` | `boolean` | Use inline interaction behavior for children. |
| `artistRelease` | `boolean` | Treat all resources as artist releases. |

Example:

```vue
<cider-media-item-grid
	:items="items"
	:artist-release="false"
/>
```

### cider-media-item-slider

Type map: `MediaItemSliderProps`

Renders a horizontal shelf/slider for media items.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `MusicKit.Resource[]` | Required list of resources. |
| `title` | `string` | Optional shelf title. |
| `subtitle` | `string` | Optional shelf subtitle. |
| `chunkSize` | `number` | Optional chunk size used by slider sections. |
| `url` | `string` | Optional route/URL used by the shelf header. |
| `artistRelease` | `boolean` | Treat resources as artist releases. |
| `showTrackCount` | `boolean` | Show track counts when possible. |

Example:

```vue
<cider-media-item-slider
	:items="items"
	title="For You"
	:chunk-size="2"
/>
```

### cider-navigation-button

Type map: `NavigationButtonProps`

Navigational action button component.

| Prop | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Required visible label. |
| `icon` | `string` | Optional icon name. |
| `path` | `string` | Optional route path target. |
| `compact` | `boolean` | Compact presentation mode. |
| `noDefaultInteract` | `boolean` | Disable built-in interaction behavior. |
| `interactionType` | `string` | Interaction mode override. |

Example:

```vue
<cider-navigation-button
	label="Albums"
	icon="music"
	path="/albums"
/>
```

### cider-playlist-editor

Type map: `PlaylistEditorProps`

Editor surface for playlist item collections.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `MusicKit.Resource[]` | Required resources to edit/reorder. |

Example:

```vue
<cider-playlist-editor
	:items="playlistItems"
/>
```

### cider-rich-album-grid

Type map: `RichAlbumGridProps`

Album-focused grid variant using richer card visuals.

| Prop | Type | Notes |
| --- | --- | --- |
| `items` | `MusicKit.Resource[]` | Required album/resource collection. |

Example:

```vue
<cider-rich-album-grid
	:items="albums"
/>
```

### cider-simple-lyric-view

Type map: `SimpleLyricViewProps`

Simple lyric renderer using lyric XML payload.

| Prop | Type | Notes |
| --- | --- | --- |
| `lyricsXml` | `string` | Required TTML/XML lyric payload. |

Example:

```vue
<cider-simple-lyric-view
	:lyrics-xml="lyricsXml"
/>
```

## Components with no explicit props

The following components are currently exposed with no stable prop contract (`NoProps` in PluginKit typing).
You can still use them as elements, but avoid depending on undocumented props.

### Immersive and Visuals

- `cider-adaptive-color-background`: Use directly as `<cider-adaptive-color-background />`.
- `cider-app-blurmap`: Use directly as `<cider-app-blurmap />`.
- `cider-chrome-artwork-blurmap`: Use directly as `<cider-chrome-artwork-blurmap />`.
- `cider-coverflow-controls`: Use directly as `<cider-coverflow-controls />`.
- `cider-immersive-button`: Use directly as `<cider-immersive-button />`.
- `cider-immersive-drawer-content`: Use directly as `<cider-immersive-drawer-content />`.
- `cider-immersive-lyric-view`: Use directly as `<cider-immersive-lyric-view />`.
- `cider-immersive-metadata`: Use directly as `<cider-immersive-metadata />`.
- `cider-immersive-solarium-player`: Use directly as `<cider-immersive-solarium-player />`.
- `cider-oobeblur-map`: Use directly as `<cider-oobeblur-map />`.
- `cider-three-dqueue`: Use directly as `<cider-three-dqueue />`.

### Playback and Queue

- `cider-airplay-button`: Use directly as `<cider-airplay-button />`.
- `cider-am-tabs-small`: Use directly as `<cider-am-tabs-small />`.
- `cider-ameq`: Use directly as `<cider-ameq />`.
- `cider-amnext-action`: Use directly as `<cider-amnext-action />`.
- `cider-amplay-action`: Use directly as `<cider-amplay-action />`.
- `cider-amplayback-actions`: Use directly as `<cider-amplayback-actions />`.
- `cider-amplcd`: Use directly as `<cider-amplcd />`.
- `cider-amplcd-glass`: Use directly as `<cider-amplcd-glass />`.
- `cider-ampmetadata-mojave`: Use directly as `<cider-ampmetadata-mojave />`.
- `cider-amprev-action`: Use directly as `<cider-amprev-action />`.
- `cider-amprogress-bar`: Use directly as `<cider-amprogress-bar />`.
- `cider-amprogress-mavericks`: Use directly as `<cider-amprogress-mavericks />`.
- `cider-amprogress-widget`: Use directly as `<cider-amprogress-widget />`.
- `cider-amrepeat-action`: Use directly as `<cider-amrepeat-action />`.
- `cider-amshuffle-action`: Use directly as `<cider-amshuffle-action />`.
- `cider-amsidebar`: Use directly as `<cider-amsidebar />`.
- `cider-amsidebar-min`: Use directly as `<cider-amsidebar-min />`.
- `cider-amtime`: Use directly as `<cider-amtime />`.
- `cider-amvolume-slider`: Use directly as `<cider-amvolume-slider />`.
- `cider-explicit`: Use directly as `<cider-explicit />`.
- `cider-hlsvideo`: Use directly as `<cider-hlsvideo />`.
- `cider-lyrics-button`: Use directly as `<cider-lyrics-button />`.
- `cider-media-item-context-menu`: Use directly as `<cider-media-item-context-menu />`.
- `cider-power-swoosh`: Use directly as `<cider-power-swoosh />`.
- `cider-power-swoosh-scroller`: Use directly as `<cider-power-swoosh-scroller />`.
- `cider-queue-button`: Use directly as `<cider-queue-button />`.
- `cider-queue-now-playing`: Use directly as `<cider-queue-now-playing />`.
- `cider-start-radio-button`: Use directly as `<cider-start-radio-button />`.
- `cider-volume-popup`: Use directly as `<cider-volume-popup />`.

### Other

- `cider-app-scroll-bounds`: Use directly as `<cider-app-scroll-bounds />`.
- `cider-context-menu-icon`: Use directly as `<cider-context-menu-icon />`.
- `cider-context-menu-icon-button`: Use directly as `<cider-context-menu-icon-button />`.
- `cider-glass-player-actions`: Use directly as `<cider-glass-player-actions />`.
- `cider-header-search`: Use directly as `<cider-header-search />`.
- `cider-lcdplayer`: Use directly as `<cider-lcdplayer />`.
- `cider-lcdplayer-glass`: Use directly as `<cider-lcdplayer-glass />`.
- `cider-lcdplayer-mavericks`: Use directly as `<cider-lcdplayer-mavericks />`.
- `cider-lcdplayer-top`: Use directly as `<cider-lcdplayer-top />`.
- `cider-lyric-dots`: Use directly as `<cider-lyric-dots />`.
- `cider-lyric-line`: Use directly as `<cider-lyric-line />`.
- `cider-lyric-view`: Use directly as `<cider-lyric-view />`.
- `cider-lyric-view-focus`: Use directly as `<cider-lyric-view-focus />`.
- `cider-lyric-word`: Use directly as `<cider-lyric-word />`.
- `cider-lyric-word-simple`: Use directly as `<cider-lyric-word-simple />`.
- `cider-mini-player-button`: Use directly as `<cider-mini-player-button />`.
- `cider-mojave-player`: Use directly as `<cider-mojave-player />`.
- `cider-playing-indicator`: Use directly as `<cider-playing-indicator />`.

### Media Browsing

- `cider-artist-chip`: Use directly as `<cider-artist-chip />`.
- `cider-artwork-blur-map`: Use directly as `<cider-artwork-blur-map />`.
- `cider-artwork-collection`: Use directly as `<cider-artwork-collection />`.
- `cider-cmore-like`: Use directly as `<cider-cmore-like />`.
- `cider-grouping-header`: Use directly as `<cider-grouping-header />`.
- `cider-grouping-slider`: Use directly as `<cider-grouping-slider />`.
- `cider-grouping-view`: Use directly as `<cider-grouping-view />`.
- `cider-hero-item`: Use directly as `<cider-hero-item />`.
- `cider-hero-item-scroller`: Use directly as `<cider-hero-item-scroller />`.
- `cider-list-item-scaffold`: Use directly as `<cider-list-item-scaffold />`.
- `cider-list-item-short`: Use directly as `<cider-list-item-short />`.
- `cider-live-badge`: Use directly as `<cider-live-badge />`.
- `cider-media-item-artwork`: Use directly as `<cider-media-item-artwork />`.
- `cider-more-btn`: Use directly as `<cider-more-btn />`.
- `cider-multi-select-context-menu`: Use directly as `<cider-multi-select-context-menu />`.
- `cider-super-hero-item`: Use directly as `<cider-super-hero-item />`.

### Shell and Navigation

- `cider-back-nav-button`: Use directly as `<cider-back-nav-button />`.
- `cider-cascade-item`: Use directly as `<cider-cascade-item />`.
- `cider-chrome-button`: Use directly as `<cider-chrome-button />`.
- `cider-chrome-top`: Use directly as `<cider-chrome-top />`.
- `cider-cinput`: Use directly as `<cider-cinput />`.
- `cider-command-center`: Use directly as `<cider-command-center />`.
- `cider-cselect`: Use directly as `<cider-cselect />`.
- `cider-forward-nav-button`: Use directly as `<cider-forward-nav-button />`.
- `cider-main-menu-button`: Use directly as `<cider-main-menu-button />`.
- `cider-modal-title-bar`: Use directly as `<cider-modal-title-bar />`.
- `cider-new-shell`: Use directly as `<cider-new-shell />`.
- `cider-new-tab-button`: Use directly as `<cider-new-tab-button />`.
- `cider-nicon`: Use directly as `<cider-nicon />`.
- `cider-overlay-scrollbar`: Use directly as `<cider-overlay-scrollbar />`.
- `cider-page-history-content`: Use directly as `<cider-page-history-content />`.
- `cider-page-stack-container`: Use directly as `<cider-page-stack-container />`.
- `cider-page-stack-item`: Use directly as `<cider-page-stack-item />`.
- `cider-plugin-base-button`: Use directly as `<cider-plugin-base-button />`.
- `cider-qmenu-hover`: Use directly as `<cider-qmenu-hover />`.
- `cider-qmenu-item`: Use directly as `<cider-qmenu-item />`.
- `cider-right-drawer-content`: Use directly as `<cider-right-drawer-content />`.
- `cider-router-link`: Use directly as `<cider-router-link />`.
- `cider-router-view`: Use directly as `<cider-router-view />`.
- `cider-sidebar`: Use directly as `<cider-sidebar />`.
- `cider-sidebar-label`: Use directly as `<cider-sidebar-label />`.
- `cider-svgicon`: Use directly as `<cider-svgicon />`.
- `cider-win-title-bar`: Use directly as `<cider-win-title-bar />`.

## Full component index

Total components: **114**

| Tag | Prop Contract | Basic usage |
| --- | --- | --- |
| `cider-adaptive-color-background` | `NoProps` | `<cider-adaptive-color-background />` |
| `cider-add-to-library-button` | `AddToLibraryButtonProps` | `<cider-add-to-library-button ... />` |
| `cider-add-to-playlist-button` | `AddToPlaylistButtonProps` | `<cider-add-to-playlist-button ... />` |
| `cider-airplay-button` | `NoProps` | `<cider-airplay-button />` |
| `cider-am-tabs-small` | `NoProps` | `<cider-am-tabs-small />` |
| `cider-ameq` | `NoProps` | `<cider-ameq />` |
| `cider-amnext-action` | `NoProps` | `<cider-amnext-action />` |
| `cider-amplay-action` | `NoProps` | `<cider-amplay-action />` |
| `cider-amplayback-actions` | `NoProps` | `<cider-amplayback-actions />` |
| `cider-amplcd` | `NoProps` | `<cider-amplcd />` |
| `cider-amplcd-glass` | `NoProps` | `<cider-amplcd-glass />` |
| `cider-ampmetadata-mojave` | `NoProps` | `<cider-ampmetadata-mojave />` |
| `cider-amprev-action` | `NoProps` | `<cider-amprev-action />` |
| `cider-amprogress-bar` | `NoProps` | `<cider-amprogress-bar />` |
| `cider-amprogress-mavericks` | `NoProps` | `<cider-amprogress-mavericks />` |
| `cider-amprogress-widget` | `NoProps` | `<cider-amprogress-widget />` |
| `cider-amqueue` | `AMQueueProps` | `<cider-amqueue ... />` |
| `cider-amrepeat-action` | `NoProps` | `<cider-amrepeat-action />` |
| `cider-amshuffle-action` | `NoProps` | `<cider-amshuffle-action />` |
| `cider-amsidebar` | `NoProps` | `<cider-amsidebar />` |
| `cider-amsidebar-min` | `NoProps` | `<cider-amsidebar-min />` |
| `cider-amtime` | `NoProps` | `<cider-amtime />` |
| `cider-amvolume-slider` | `NoProps` | `<cider-amvolume-slider />` |
| `cider-app-blurmap` | `NoProps` | `<cider-app-blurmap />` |
| `cider-app-scroll-bounds` | `NoProps` | `<cider-app-scroll-bounds />` |
| `cider-artist-chip` | `NoProps` | `<cider-artist-chip />` |
| `cider-artwork-blur-map` | `NoProps` | `<cider-artwork-blur-map />` |
| `cider-artwork-collection` | `NoProps` | `<cider-artwork-collection />` |
| `cider-back-nav-button` | `NoProps` | `<cider-back-nav-button />` |
| `cider-cascade-item` | `NoProps` | `<cider-cascade-item />` |
| `cider-chrome-artwork-blurmap` | `NoProps` | `<cider-chrome-artwork-blurmap />` |
| `cider-chrome-button` | `NoProps` | `<cider-chrome-button />` |
| `cider-chrome-top` | `NoProps` | `<cider-chrome-top />` |
| `cider-cinput` | `NoProps` | `<cider-cinput />` |
| `cider-cmore-like` | `NoProps` | `<cider-cmore-like />` |
| `cider-command-center` | `NoProps` | `<cider-command-center />` |
| `cider-context-menu-icon` | `NoProps` | `<cider-context-menu-icon />` |
| `cider-context-menu-icon-button` | `NoProps` | `<cider-context-menu-icon-button />` |
| `cider-coverflow-controls` | `NoProps` | `<cider-coverflow-controls />` |
| `cider-cselect` | `NoProps` | `<cider-cselect />` |
| `cider-explicit` | `NoProps` | `<cider-explicit />` |
| `cider-forward-nav-button` | `NoProps` | `<cider-forward-nav-button />` |
| `cider-glass-player-actions` | `NoProps` | `<cider-glass-player-actions />` |
| `cider-grouping-header` | `NoProps` | `<cider-grouping-header />` |
| `cider-grouping-slider` | `NoProps` | `<cider-grouping-slider />` |
| `cider-grouping-view` | `NoProps` | `<cider-grouping-view />` |
| `cider-header-search` | `NoProps` | `<cider-header-search />` |
| `cider-hero-item` | `NoProps` | `<cider-hero-item />` |
| `cider-hero-item-scroller` | `NoProps` | `<cider-hero-item-scroller />` |
| `cider-hlsvideo` | `NoProps` | `<cider-hlsvideo />` |
| `cider-immersive-artwork` | `ImmersiveArtworkProps` | `<cider-immersive-artwork ... />` |
| `cider-immersive-button` | `NoProps` | `<cider-immersive-button />` |
| `cider-immersive-drawer-content` | `NoProps` | `<cider-immersive-drawer-content />` |
| `cider-immersive-lyric-view` | `NoProps` | `<cider-immersive-lyric-view />` |
| `cider-immersive-metadata` | `NoProps` | `<cider-immersive-metadata />` |
| `cider-immersive-solarium-player` | `NoProps` | `<cider-immersive-solarium-player />` |
| `cider-lcdplayer` | `NoProps` | `<cider-lcdplayer />` |
| `cider-lcdplayer-glass` | `NoProps` | `<cider-lcdplayer-glass />` |
| `cider-lcdplayer-mavericks` | `NoProps` | `<cider-lcdplayer-mavericks />` |
| `cider-lcdplayer-top` | `NoProps` | `<cider-lcdplayer-top />` |
| `cider-list-item` | `ListItemProps` | `<cider-list-item ... />` |
| `cider-list-item-scaffold` | `NoProps` | `<cider-list-item-scaffold />` |
| `cider-list-item-scroller` | `ListItemScrollerProps` | `<cider-list-item-scroller ... />` |
| `cider-list-item-short` | `NoProps` | `<cider-list-item-short />` |
| `cider-live-badge` | `NoProps` | `<cider-live-badge />` |
| `cider-lyric-dots` | `NoProps` | `<cider-lyric-dots />` |
| `cider-lyric-line` | `NoProps` | `<cider-lyric-line />` |
| `cider-lyric-view` | `NoProps` | `<cider-lyric-view />` |
| `cider-lyric-view-focus` | `NoProps` | `<cider-lyric-view-focus />` |
| `cider-lyric-word` | `NoProps` | `<cider-lyric-word />` |
| `cider-lyric-word-simple` | `NoProps` | `<cider-lyric-word-simple />` |
| `cider-lyrics-button` | `NoProps` | `<cider-lyrics-button />` |
| `cider-main-menu-button` | `NoProps` | `<cider-main-menu-button />` |
| `cider-media-item` | `MediaItemProps` | `<cider-media-item ... />` |
| `cider-media-item-artwork` | `NoProps` | `<cider-media-item-artwork />` |
| `cider-media-item-context-menu` | `NoProps` | `<cider-media-item-context-menu />` |
| `cider-media-item-grid` | `MediaItemGridProps` | `<cider-media-item-grid ... />` |
| `cider-media-item-slider` | `MediaItemSliderProps` | `<cider-media-item-slider ... />` |
| `cider-mini-player-button` | `NoProps` | `<cider-mini-player-button />` |
| `cider-modal-title-bar` | `NoProps` | `<cider-modal-title-bar />` |
| `cider-mojave-player` | `NoProps` | `<cider-mojave-player />` |
| `cider-more-btn` | `NoProps` | `<cider-more-btn />` |
| `cider-multi-select-context-menu` | `NoProps` | `<cider-multi-select-context-menu />` |
| `cider-navigation-button` | `NavigationButtonProps` | `<cider-navigation-button ... />` |
| `cider-new-shell` | `NoProps` | `<cider-new-shell />` |
| `cider-new-tab-button` | `NoProps` | `<cider-new-tab-button />` |
| `cider-nicon` | `NoProps` | `<cider-nicon />` |
| `cider-oobeblur-map` | `NoProps` | `<cider-oobeblur-map />` |
| `cider-overlay-scrollbar` | `NoProps` | `<cider-overlay-scrollbar />` |
| `cider-page-history-content` | `NoProps` | `<cider-page-history-content />` |
| `cider-page-stack-container` | `NoProps` | `<cider-page-stack-container />` |
| `cider-page-stack-item` | `NoProps` | `<cider-page-stack-item />` |
| `cider-playing-indicator` | `NoProps` | `<cider-playing-indicator />` |
| `cider-playlist-editor` | `PlaylistEditorProps` | `<cider-playlist-editor ... />` |
| `cider-plugin-base-button` | `NoProps` | `<cider-plugin-base-button />` |
| `cider-power-swoosh` | `NoProps` | `<cider-power-swoosh />` |
| `cider-power-swoosh-scroller` | `NoProps` | `<cider-power-swoosh-scroller />` |
| `cider-qmenu-hover` | `NoProps` | `<cider-qmenu-hover />` |
| `cider-qmenu-item` | `NoProps` | `<cider-qmenu-item />` |
| `cider-queue-button` | `NoProps` | `<cider-queue-button />` |
| `cider-queue-now-playing` | `NoProps` | `<cider-queue-now-playing />` |
| `cider-rich-album-grid` | `RichAlbumGridProps` | `<cider-rich-album-grid ... />` |
| `cider-right-drawer-content` | `NoProps` | `<cider-right-drawer-content />` |
| `cider-router-link` | `NoProps` | `<cider-router-link />` |
| `cider-router-view` | `NoProps` | `<cider-router-view />` |
| `cider-sidebar` | `NoProps` | `<cider-sidebar />` |
| `cider-sidebar-label` | `NoProps` | `<cider-sidebar-label />` |
| `cider-simple-lyric-view` | `SimpleLyricViewProps` | `<cider-simple-lyric-view ... />` |
| `cider-start-radio-button` | `NoProps` | `<cider-start-radio-button />` |
| `cider-super-hero-item` | `NoProps` | `<cider-super-hero-item />` |
| `cider-svgicon` | `NoProps` | `<cider-svgicon />` |
| `cider-three-dqueue` | `NoProps` | `<cider-three-dqueue />` |
| `cider-volume-popup` | `NoProps` | `<cider-volume-popup />` |
| `cider-win-title-bar` | `NoProps` | `<cider-win-title-bar />` |
