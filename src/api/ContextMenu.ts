import type { Ref } from 'vue';
import * as Ctx from '../api/ciderapi-types/lib/ContextMenu'

// @ts-ignore
export const ContextMenuAPI = window.__PLUGINSYS__.ContextMenu as typeof Ctx;

type UseContextMenuOptions = {
  elementRef: Ref<HTMLElement | undefined>;
}

type UseContextMenu = (menu: Ctx.Menu, opts?: UseContextMenuOptions) => {
    elementRef: Ref<HTMLElement | undefined>;
    setElementRef: (el: HTMLElement | undefined) => void;
    showContextMenu: (event: MouseEvent | Event) => void;
    menu: Ctx.Menu;
};

// @ts-ignore
export const useContextMenu = window.__PLUGINSYS__.Composables.useContextMenu as UseContextMenu;
