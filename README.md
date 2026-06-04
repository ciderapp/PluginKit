# @ciderapp/pluginkit

`@ciderapp/pluginkit` is the open source plugin API for Cider.

It is the public bridge between a plugin and the closed source Cider frontend. The package does not reimplement Cider; it exposes the supported host APIs, Vue helpers, playback controls, context menu builders, dialog helpers, and plugin-scoped utilities that Cider provides at runtime.

If you are building a plugin, start with [docs/API Documentation.md](docs/API%20Documentation.md).

## What it is

- Cider is the host application.
- PluginKit is the supported API surface exposed to plugins.
- The host injects runtime objects such as `window.__PLUGINSYS__`, `window.CiderApp`, and `window.CiderAudio`.
- Most helpers in this package are thin wrappers around those host objects.

## Quick Start

```ts
import {
  definePluginContext,
  AppleMusic,
  addMainMenuEntry,
  subscribeEvent,
  useMessageListener,
} from "@ciderapp/pluginkit";

const plugin = definePluginContext({
  setup() {},
  name: "Example Plugin",
  identifier: "example-plugin",
  description: "Example plugin for Cider",
  version: "1.0.0",
  author: "You",
  repo: "https://github.com/you/example-plugin",
});

AppleMusic.playPause();

const removeMenuEntry = addMainMenuEntry({
  label: "Example action",
  onClick: () => console.log("Clicked"),
});

subscribeEvent("app:ready", () => {
  console.log("Cider is ready");
});

useMessageListener("example:ping", (event) => {
  console.log("Received", event);
});
```

## Documentation

- [API reference](docs/API%20Documentation.md)

## Development

1. Install the latest LTS version of [Node.js](https://nodejs.org/en/).
2. Enable [Corepack](https://github.com/nodejs/corepack) with `corepack enable`.
3. Install dependencies with `pnpm install`.
4. Run the local test and typecheck loop with `pnpm dev`.

## Reporting issues

- Use this repository for PluginKit bugs, missing APIs, and integration issues with Cider's plugin host.
- Do not report plugin-specific bugs here; report those to the plugin author.

## License

Published under the MIT license.
