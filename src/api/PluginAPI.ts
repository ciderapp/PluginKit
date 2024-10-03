export type PluginAPI = {
    setup(): void;
    name: string;
    identifier: string;
    ce_prefix?: string;
    description: string;
    version: string;
    author: string;
    repo: string;
    SettingsElement?: string;
    CustomElements?: { [key: string]: any };
}
