/// <reference types="vite/client" />

declare const __BUILD_TIMESTAMP__: number;

declare const W: any;
declare const L: any;
declare module '*.svelte' {
  import type { ComponentType } from 'svelte';

  const component: ComponentType;
  export default component;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: boolean;
  }
}
