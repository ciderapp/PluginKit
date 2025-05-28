import { type Component } from "vue";

export type DialogWindowStyle = 'generic' | 'none';

export type PromptOptions = {
  minLength?: number;
  maxLength?: number;
};

export type DialogWindowPosition = 'center';

export type ConfirmOptions = {
  okLabel?: string;
  cancelLabel?: string;
  showCancel?: boolean;
};

export type DialogProps = {
  seamless?: boolean;
  windowStyle?: DialogWindowStyle;
  component: Component;
  componentProps?: Record<string, any>;
  position?: DialogWindowPosition;
  windowClasses?: string | string[];
  windowStyles?: Record<string, string>;
  backdropClasses?: string | string[];
  backdropStyles?: Record<string, string>;
  backdropClose?: boolean;
};

export type CiderDialog<T> = {
  show: () => Promise<T>;
  close: () => void;
};

export function createDialog<T>(props: DialogProps): CiderDialog<T>;

export function createAlertOptions(options: { message: string; title?: string }): Promise<void>;

export function createAlert(message: string, title?: string): Promise<void>;

export function createConfirm(message: string, title?: string, opts?: ConfirmOptions): Promise<boolean | null>;

export function createPrompt(message: string, title?: string, opts?: PromptOptions): Promise<string | null>;
