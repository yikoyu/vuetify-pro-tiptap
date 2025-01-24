import { Extensions } from '@tiptap/core';
import { Plugin } from 'vue';
export interface InstallationOptions {
    lang?: string;
    markdownTheme?: string;
    components?: Record<string, any>;
    extensions?: Extensions;
}
export declare const createVuetifyProTipTap: (opts: InstallationOptions) => Plugin;
