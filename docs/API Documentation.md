# PluginKit API

PluginKit is the public plugin bridge for Cider. It sits on top of the closed source frontend and exposes the host objects and helpers that plugins are allowed to rely on.

The package is intentionally thin:

- `window.__PLUGINSYS__` is the host integration surface.
- `window.CiderApp` is the main app object.
- `window.CiderAudio` exposes the audio host.
- Most helpers in this package forward directly to those objects.

This document explains the contract from a plugin author's point of view.

## Runtime model

A plugin runs inside Cider's frontend process. The plugin does not own the application shell, routing, or playback engine. Instead, it receives access to selected host APIs through PluginKit.

That has a few consequences:

- You can only use these helpers while running inside Cider.
- Behavior depends on the host version and which host subsystems have been initialized.
- Some APIs are thin wrappers over the host, so failures usually mean the host is unavailable or not ready yet.

## Plugin bootstrap

Use `definePluginContext` to bind plugin metadata to plugin-scoped helpers.

```ts
import { definePluginContext } from "@ciderapp/pluginkit";

const ctx = definePluginContext({
  setup() {
    // Plugin startup logic.
  },
  name: "Example Plugin",
  identifier: "example-plugin",
  description: "Example plugin for Cider",
  version: "1.0.0",
  author: "You",
  repo: "https://github.com/you/example-plugin",
});
```

`definePluginContext` returns:

- `customElementName(name)` for generating host-safe custom element names.
- `goToPage({ name })` for navigating to a plugin page.
- `useCPlugin()` for accessing the plugin metadata object.
- `setupConfig(defaults)` for creating a reactive plugin config object.
- `getBundledAssetURL(path)` for resolving bundled assets.
- `plugin`, which is the metadata object augmented with `pluginKitVersion`.

### Plugin config

`setupConfig(defaults)` reads and writes the plugin's config subtree under `CiderApp.config`.

- Default values are merged with saved values.
- The returned value is a Vue `Ref`.
- Mutating the ref updates the saved plugin config.
- Call `saveConfig()` when you want Cider to persist the updated config.

## Host access helpers

### `useCider()`

Returns the active `CiderApp` instance.

Use this when you need lower-level host access that is not wrapped by PluginKit.

### `useRouter()`

Returns the host router used by Cider.

In plugin contexts, this usually resolves to the plugin router if one exists, otherwise the main app router.

### `getURLParam(name)`

Reads a query parameter from the current URL.

### `useMusicKit()`

Deprecated compatibility helper. It returns `null` and should not be used for new playback code.

Use `AppleMusic` instead.

## Playback control

`AppleMusic` is the supported playback controller for plugins.

It is backed by the host's Apple Music store and MKLite internals. The controller is synchronous at the API boundary, but some operations may return promises because the host may need to ensure the player is ready first.

```ts
import { AppleMusic } from "@ciderapp/pluginkit";

AppleMusic.playPause();
AppleMusic.next();
AppleMusic.setShuffleState(true);
```

### Properties

- `shuffleMode` is numeric, using the MusicKit-style values `0` for off and `1` for on.
- `repeatMode` is numeric, using `0` for none, `1` for one, and `2` for all.
- `nowPlayingItem` returns the current host now-playing object.

### Methods

- `playPause()`, `play()`, `pause()`, `stop()`, `next()`, `previous()` control transport.
- `setShuffleState(state?)` toggles or explicitly sets shuffle.
- `setRepeatState(mode?)` toggles or explicitly sets repeat. Accepted values are `0`, `1`, `2`, `none`, `one`, and `all`.
- `playItemById({ type, id })` builds an Apple Music URL from the item type and ID, ensures the player exists, and starts playback.

### `useCiderAudio()`

Returns the Cider audio host object.

Use this for audio-level integrations such as inspecting the current audio graph or responding to the audio subsystem's `ready` event.

The object includes:

- `context` and `source` for Web Audio access.
- `audioNodes` for the host audio graph.
- `store` for preset and profile data.
- `init()` to initialize the audio subsystem.
- `subscribe()` and `dispatchEvent()` for audio events.

## Events and messaging

### `subscribeEvent(event, cb, opts?)`

Subscribes to a Cider PAPI event and unwraps the event detail before calling your callback.

Available PAPI events include:


## Custom Elements

- [Custom Elements reference](Custom%20Elements.md)
- `shell:layout_type_changed`
- `immersive:opened`
- `immersive:closed`
- `miniplayer:opened`
- `miniplayer:closed`
- `browser:page_changed`

The function returns an unsubscribe callback.

### `subscribeEventOnce(event, cb)`

Convenience wrapper for a single-fire subscription.

### `unsubscribeEvent(event, cb)`

Manually removes a PAPI event listener.

### `ExternalMessages`

Direct access to the host's cross-plugin and host messaging bus.

Use this when you need lower-level message dispatch or when you want to interoperate with another plugin or host feature directly.

### `useMessageListener(eventName, callback, opts?)`

Vue-friendly wrapper around `ExternalMessages.addEventListener`.

- Registers the listener immediately.
- Automatically removes it when the current component unmounts.
- Returns a manual cleanup function.

## UI helpers

### `createModal(opts)`

Creates a native `<dialog>`-based modal element.

Options:

- `escClose` closes the modal when Escape is pressed.
- `className` adds one or more CSS classes.
- `noDefaultClass` skips the default `plugin-base-modal` class.
- `element` appends a child element into the dialog.

Returns:

- `openDialog()` to mount and show the dialog.
- `closeDialog()` to close and remove it.
- `dialogElement` for direct DOM access.
- `addClass(className)` for runtime class changes.

### `createDialog`, `createAlert`, `createConfirm`, `createPrompt`

These are the higher-level dialog helpers exposed by the host dialog system.

- `createDialog<T>(props)` opens a custom dialog component and resolves with `T`.
- `createAlert(message, title?)` shows a basic alert.
- `createAlertOptions({ message, title? })` is the options-based alert variant.
- `createConfirm(message, title?, opts?)` shows a confirm prompt and resolves to `boolean | null`.
- `createPrompt(message, title?, opts?)` shows a prompt and resolves to `string | null`.

### `DialogAPI`

The namespace-style dialog API exported by the host. Use this if you want the same methods under a grouped object rather than individual helpers.

## Menu and layout APIs

### `addMainMenuEntry(item)`

Adds an entry to the main application menu and returns a removal function.

### `addMediaItemContextMenuEntry(item)`

Adds an item to the media item context menu and returns a removal function.

### `addImmersiveMenuEntry(item)`

Adds an item to the immersive player menu and returns a removal function.

### `addImmersiveLayout(layout)` / `removeImmersiveLayout(layout)` / `removeImmersiveLayoutById(identifier)`

Registers and removes custom immersive layouts.

Use these when a plugin wants to provide an alternate immersive surface rather than a small control or menu item.

### `addCustomButton(opts)`

Adds a host chrome button.

Supported locations are:

- `chrome-top/right`
- `mojave/player/right`

You can provide separate click and context-menu handlers, plus optional menu element markup.

## Context menu helpers

### `ContextMenuAPI`

The host's context menu object model exposed as a namespace.

### `useContextMenu(menu, opts?)`

Vue composable for binding a context menu to an element reference.

Use this when you need host-style menus that track a specific DOM element and show on right click.

## Remote data helpers

### `v3(url, args?, opts?, apiType?)`

Calls the host's v3 API client.

Use this for direct Apple Music or related host-backed requests when the built-in controller does not cover the operation you need.

### `v3Turbo(route, args?)`

Turbo-style wrapper around the same host request machinery.

## Plugin metadata

### `PluginAPI`

The metadata object passed into `definePluginContext`.

Required fields:

- `setup()`
- `name`
- `identifier`
- `description`
- `version`
- `author`
- `repo`

Optional fields:

- `ce_prefix`
- `SettingsElement`
- `CustomElements`
- `pluginKitVersion`

## Exports at a glance

The package exports the following public helpers and types:

- `definePluginContext`
- `PluginAPI`
- `AppleMusic`
- `useCider`
- `useRouter`
- `getURLParam`
- `useMusicKit`
- `useCiderAudio`
- `saveConfig`
- `subscribeEvent`
- `subscribeEventOnce`
- `unsubscribeEvent`
- `ExternalMessages`
- `useMessageListener`
- `createModal`
- `DialogAPI`
- `ContextMenuAPI`
- `useContextMenu`
- `addCustomButton`
- `addImmersiveLayout`
- `removeImmersiveLayout`
- `removeImmersiveLayoutById`
- `addMainMenuEntry`
- `addMediaItemContextMenuEntry`
- `addImmersiveMenuEntry`
- `v3`
- `v3Turbo`
- `ComponentNames`
- `CustomButtonOptions`
- `CustomImmersiveLayout`
- `MenuItem`
- `CARPreset`
- `COCPreset`
- `SpatialPreset`

## Practical guidance

- Prefer the highest-level helper that covers the job. For example, use `AppleMusic` before falling back to `useCider().config` or `v3`.
- If an API returns a removal callback, keep it and call it during plugin teardown.
- If you are binding anything to Vue component lifecycle, prefer `useMessageListener` or the composables instead of manual global listeners.
- To ensure stability only use the documented helpers and APIs. Avoid reaching into `window.__PLUGINSYS__` or other host objects directly. PluginKit APIs are designed to be stable and backward-compatible, but the underlying host objects may change without warning.