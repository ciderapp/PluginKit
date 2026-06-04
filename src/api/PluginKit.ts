import { clone, merge } from "lodash";
import { PluginAPI } from "./PluginAPI";
import { useCider, useRouter } from "./Std";
import { ref, watch } from "vue";
import type { Ref } from "vue";
import { isViteDev } from "../utils";

export function definePluginContext(options: PluginAPI) {
  const useCPlugin = () => {
    return options;
  };

  function customElementName(name: string) {
    return `${useCPlugin()?.ce_prefix ?? options.identifier}-${name}`;
  }

  function setupConfig<T extends Record<string, any>>(defaults: T): Ref<T> {
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

    watch(
      () => cfgRef,
      (newVal) => {
        config["plugins"][identifier] = newVal;
      },
      {
        deep: true,
      },
    );

    return cfgRef;
  }

  type GoToPageOptions = {
    name: string;
    // name: keyof typeof options.CustomElements
  };

  async function goToPage(opts: GoToPageOptions) {
    const page = customElementName(opts.name);
    const routeBase = `/ugc/plugins/ce/`;

    const $router = useRouter();
    return await $router.push(`${routeBase}${page}`);
  }

  /**
   * Returns the URL of a bundled asset from the Vite public/ directory.
   * @param path
   */
  function getBundledAssetURL(path: string) {
    const _path = path.replace(/^\//, "");
    if (isViteDev()) {
      return `http://localhost:3058/${_path}`;
    }
    return `${window.location.origin}/plugins/${options.identifier}/${_path}`;
  }

  const pluginDefinition = {
    ...options,
    pluginKitVersion: 4,
  };

  const exports = {
    customElementName,
    goToPage,
    useCPlugin,
    setupConfig,
    getBundledAssetURL,
    plugin: pluginDefinition,
  };

  return exports;
}
