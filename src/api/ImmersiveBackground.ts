export type CustomImmersiveBackground = {
    name: string;
    identifier: string;
    component: string;
  }

export function addImmersiveBackground(layout: CustomImmersiveBackground) {
    return __PLUGINSYS__.Components.ImmersiveBackgrounds.addBackground(layout)
}

export function removeImmersiveBackground(layout: CustomImmersiveBackground) {
    return __PLUGINSYS__.Components.ImmersiveBackgrounds.removeBackground(layout)
}
