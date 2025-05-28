declare namespace Cider {
    namespace ContextMenu {
        interface MenuItem {
            label: string;
            icon?: string; // Assuming ContextMenuIcons will be represented as strings externally
            type?: 'normal' | 'separator';
            onClick?: () => void;
            children?: MenuItem[];
            actionId?: string;
            enabled?: boolean;
            toolTip?: string;
            accelerator?: string;
            sublabel?: string;
            checked?: boolean;
        }

        interface ContextMenu {
            items: MenuItem[];
            itemsFunction?: () => MenuItem[];
            x?: number;
            y?: number;
            show: (e: MouseEvent) => void;
            setItems: (items: (MenuItem | false)[]) => this;
            addItem: (item: MenuItem | false) => this;
        }
    }
}

export type ContextMenuIcons = string; // Or a more specific string literal union if NucleoIcons keys are known and stable

export type SetMenuItem = Cider.ContextMenu.MenuItem | false;

export type SetMenuItems = SetMenuItem[] | (() => SetMenuItem[]);

export interface Menu extends Cider.ContextMenu.ContextMenu {
    new(items?: SetMenuItems): Menu;
    items: Cider.ContextMenu.MenuItem[];
    itemsFunction: () => Cider.ContextMenu.MenuItem[];
    x: number;
    y: number;
    show(e: MouseEvent): void;
    setItems(items: SetMenuItem[]): this;
    addItem(item: Cider.ContextMenu.MenuItem | false): this;
}

export interface MenuItem extends Cider.ContextMenu.MenuItem {
    new(label?: string, props?: Partial<Cider.ContextMenu.MenuItem & { icon?: ContextMenuIcons }>, children?: Cider.ContextMenu.MenuItem[]): MenuItem;
    label: string;
    icon?: ContextMenuIcons;
    type: 'normal' | 'separator';
    onClick: () => void;
    children?: Cider.ContextMenu.MenuItem[];
    actionId: string;
    enabled: boolean;
    toolTip?: string | undefined;
    accelerator?: string | undefined;
    sublabel?: string | undefined;
    checked?: boolean | undefined;
    setLabel(label: string): this;
    setIcon(icon: ContextMenuIcons): this;
    setType(type: 'normal' | 'separator'): this;
    setOnClick(onClick: () => void): this;
    setChecked(checked: boolean): this;
    setEnabled(enabled: boolean): this;
    setItems(items: SetMenuItem[]): this;
    addItem(item: SetMenuItem): this;
}

export interface Seperator extends MenuItem {
    new(): Seperator;
    type: 'separator';
}

export type FrontendMenuItem = Cider.ContextMenu.MenuItem & { icon?: ContextMenuIcons };

export interface CreateMenuInitHelper {
    actionItem: typeof actionItem;
    createMenuItem: typeof createMenuItem;
    toggleItem: typeof toggleItem;
    menuSeperator: typeof menuSeperator;
    cascadeItem: typeof cascadeItem;
    $i: (key: string, replacements?: Record<string, string>) => string; // Assuming $i and $lz return strings
    $lz: (key: string, replacements?: Record<string, string>) => string;
}

export type CreateMenuFn = (helpers: CreateMenuInitHelper) => SetMenuItems;

export declare function createMenu(init: CreateMenuFn): Menu;

export declare function createMenuItem(label: string, props?: Partial<FrontendMenuItem>, children?: FrontendMenuItem[]): MenuItem;

export declare function menuSeperator(): MenuItem;

export declare function actionItem(label: string, onClick?: () => void, props?: Partial<FrontendMenuItem>): MenuItem;

export declare function toggleItem(label: string, checked?: boolean, onClick?: () => void, props?: Partial<FrontendMenuItem>): MenuItem;

export declare function cascadeItem(label: string, items?: SetMenuItem[], props?: Partial<FrontendMenuItem>): MenuItem;

export declare const Menu: Menu;
export declare const MenuItem: MenuItem;
export declare const Seperator: Seperator;
