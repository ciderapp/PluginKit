## Functions

### `useMessageListener`

Registers a callback function to be called when a specified event occurs.

```typescript
useMessageListener(eventName: string, callback: (e: any) => void, opts?: Partial<{
  once: boolean;
  passive: boolean;
  capture: boolean;
}>): () => void;
```

- **eventName**: The name of the event to listen for.
- **callback**: The function to call when the event occurs.
- **opts**: Optional settings for the event listener.
  - **once**: If true, the listener will be removed after the first call.
  - **passive**: If true, indicates that the function will never call `preventDefault()`.
  - **capture**: If true, the event will be captured in the capturing phase.

### `createModal`

Creates a modal dialog with specified options.

```typescript
createModal(opts: CreateModalOptions): {
  openDialog: () => void;
  closeDialog: () => void;
  dialogElement: HTMLDialogElement;
  addClass: (className: BuiltInClasses) => void;
};
```

- **opts**: Options for creating the modal.
  - **escClose**: If true, the modal can be closed with the Escape key.
  - **className**: An array of classes to add to the modal.
  - **noDefaultClass**: If true, the default class will not be added.
  - **element**: The HTML element to use for the modal.

### `useMusicKit`

Provides access to the MusicKit JS API.

Learn more at https://developer.apple.com/documentation/musickitjs

```typescript
useMusicKit(): MusicKit.MusicKitInstance;
```

### `useRouter`

Provides access to the router.

```typescript
useRouter(): any;
```

### `getURLParam`

Gets the value of a URL parameter by name.

```typescript
getURLParam(name: string): string | null;
```

- **name**: The name of the URL parameter.

### `useCider`

Provides access to the CiderApp.

```typescript
useCider(): typeof CiderApp;
```

## Exports

The following symbols are exported:

- `ComponentNames`
- `CustomButtonOptions`
- `CustomImmersiveLayout`
- `ExternalMessages`
- `MenuItem`
- `PluginAPI`
- `addCustomButton`
- `addImmersiveLayout`
- `addImmersiveMenuEntry`
- `addMainMenuEntry`
- `addMediaItemContextMenuEntry`
- `createModal`
- `definePluginContext`
- `getURLParam`
- `removeImmersiveLayout`
- `removeImmersiveLayoutById`
- `saveConfig`
- `subscribeEvent`
- `subscribeEventOnce`
- `unsubscribeEvent`
- `useCider`
- `useCiderAudio`
- `useMessageListener`
- `useMusicKit`
- `useRouter`

