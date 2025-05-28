import { merge, clone } from 'lodash';
import { ref, watch, onUnmounted } from 'vue';

function useRouter() {
  return useCider().router;
}
function getURLParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
function useCider() {
  return window.CiderApp;
}

function isViteDev() {
  return typeof window.__VUE_HMR_RUNTIME__ == "object";
}

function definePluginContext(options) {
  const useCPlugin = () => {
    return options;
  };
  function customElementName(name) {
    return `${useCPlugin()?.ce_prefix ?? options.identifier}-${name}`;
  }
  function setupConfig(defaults) {
    const cfg = { ...defaults };
    const config = useCider().config.getRef();
    const { identifier } = useCPlugin();
    if (!config["plugins"]) {
      config["plugins"] = {};
    }
    if (!config["plugins"][identifier]) {
      config["plugins"][identifier] = {};
    }
    const pluginConfig = config["plugins"][identifier];
    config["plugins"][identifier] = merge(cfg, pluginConfig);
    const cfgRef = ref(clone(config["plugins"][identifier]));
    watch(() => cfgRef, (newVal) => {
      config["plugins"][identifier] = newVal;
    }, {
      deep: true
    });
    return cfgRef;
  }
  async function goToPage(opts) {
    const page = customElementName(opts.name);
    const routeBase = `/ugc/plugins/ce/`;
    const $router = useRouter();
    return await $router.push(`${routeBase}${page}`);
  }
  function getBundledAssetURL(path) {
    const _path = path.replace(/^\//, "");
    const IZ_PORT = window.location.port;
    if (isViteDev()) {
      return `http://localhost:3058/${_path}`;
    }
    return `http://localhost:${IZ_PORT}/plugins/${options.identifier}/${_path}`;
  }
  const exports = {
    customElementName,
    goToPage,
    useCPlugin,
    setupConfig,
    getBundledAssetURL,
    plugin: options
  };
  return exports;
}

class SpatialPreset {
  id = "";
  file = "";
  name = "";
  description = "";
  gainComp = "";
  purchaseDocumentID = "";
}
class CARPreset {
  id = "";
  file = "";
  name = "";
  description = "";
}
class COCPreset {
  id = "";
  file = "";
  name = "";
  description = "";
  purchaseDocumentID = "";
}
function useCiderAudio() {
  return window.CiderAudio;
}

async function saveConfig() {
  return useCider().config.saveConfig();
}

function addCustomButton(opts) {
  __PLUGINSYS__.Components.CustomButtons.addCustomButton(opts);
}

function subscribeEvent(event, cb, opts) {
  const wrappedCb = (e) => cb(e.detail);
  __PLUGINSYS__.PAPIInstance.addEventListener(event, wrappedCb, opts);
  return () => {
    unsubscribeEvent(event, wrappedCb);
  };
}
function subscribeEventOnce(event, cb) {
  return subscribeEvent(event, cb, { once: true });
}
function unsubscribeEvent(event, cb) {
  __PLUGINSYS__.PAPIInstance.removeEventListener(event, cb);
}

function addImmersiveLayout(layout) {
  return __PLUGINSYS__.Components.ImmersiveLayouts.addLayout(layout);
}
function removeImmersiveLayout(layout) {
  return __PLUGINSYS__.Components.ImmersiveLayouts.removeLayout(layout);
}
function removeImmersiveLayoutById(identifier) {
  return __PLUGINSYS__.Components.MediaItemContextMenu.removeLayoutByIdentifier(identifier);
}

function addMainMenuEntry(item) {
  const _item = __PLUGINSYS__.Components.MainMenu.addMenuItem(item);
  return () => {
    __PLUGINSYS__.Components.MainMenu.removeMenuItem(_item);
  };
}
function addMediaItemContextMenuEntry(item) {
  const _item = __PLUGINSYS__.Components.MediaItemContextMenu.addMenuItem(item);
  return () => {
    __PLUGINSYS__.Components.MediaItemContextMenu.removeMenuItem(_item);
  };
}
function addImmersiveMenuEntry(item) {
  const _item = __PLUGINSYS__.Components.ImmersiveMenu.addMenuItem(item);
  return () => {
    __PLUGINSYS__.Components.ImmersiveMenu.removeMenuItem(_item);
  };
}

const ExternalMessages = __PLUGINSYS__.ExternalMessages;
function useMessageListener(eventName, callback, opts) {
  ExternalMessages.addEventListener(eventName, callback, opts);
  function removeListener() {
    ExternalMessages.removeEventListener(eventName, callback);
  }
  onUnmounted(() => {
    removeListener();
  });
  return removeListener;
}

function createModal(opts) {
  const dialogElement = document.createElement("dialog");
  if (opts.element) {
    dialogElement.appendChild(opts.element);
  }
  const openDialog = () => {
    document.body.appendChild(dialogElement);
    dialogElement.showModal();
    if (opts.escClose) {
      dialogElement.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeDialog();
        }
      });
    }
  };
  const closeDialog = () => {
    dialogElement.close();
    dialogElement.remove();
  };
  const addClass = (className) => {
    dialogElement.classList.add(className);
  };
  if (!opts.noDefaultClass) {
    dialogElement.classList.add("plugin-base-modal");
  }
  if (opts.className) {
    opts.className.forEach((className) => {
      dialogElement.classList.add(className);
    });
  }
  return {
    openDialog,
    closeDialog,
    dialogElement,
    addClass
  };
}

function useMusicKit() {
  return window.MusicKit.getInstance();
}

const DialogAPI = window.__PLUGINSYS__.Dialog;

const ContextMenuAPI = window.__PLUGINSYS__.ContextMenu;
const useContextMenu = window.__PLUGINSYS__.Composables.useContextMenu;

export { CARPreset, COCPreset, ContextMenuAPI, DialogAPI, ExternalMessages, SpatialPreset, addCustomButton, addImmersiveLayout, addImmersiveMenuEntry, addMainMenuEntry, addMediaItemContextMenuEntry, createModal, definePluginContext, getURLParam, removeImmersiveLayout, removeImmersiveLayoutById, saveConfig, subscribeEvent, subscribeEventOnce, unsubscribeEvent, useCider, useCiderAudio, useContextMenu, useMessageListener, useMusicKit, useRouter };
