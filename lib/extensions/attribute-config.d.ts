import { ExtensionAttribute } from '@tiptap/core';
export interface AttributeConfigOptions {
    allowedAttributes?: string[];
}
/**
 * 全局属性注册中心
 */
declare class AttributeRegistry {
    private globalAttributes;
    private isInitialized;
    /**
     * 注册全局允许的属性（通常由 HtmlView 扩展调用）
     */
    registerGlobalAttributes(attributes: string[]): void;
    /**
     * 获取全局允许的属性
     */
    getGlobalAttributes(): string[];
    /**
     * 检查是否已初始化
     */
    isGlobalInitialized(): boolean;
    /**
     * 重置注册表（用于测试）
     */
    reset(): void;
}
declare const attributeRegistry: AttributeRegistry;
/**
 * 注册全局允许的属性（由 HtmlView 扩展调用）
 */
export declare function registerGlobalAllowedAttributes(attributes: string[]): void;
/**
 * 获取全局允许的属性
 */
export declare function getGlobalAllowedAttributes(): string[];
/**
 * 检查全局属性是否已初始化
 */
export declare function isGlobalAttributesInitialized(): boolean;
/**
 * Create common HTML attributes for an extension
 * 为扩展创建通用的HTML属性
 *
 * @param parent - The parent extension's addAttributes result
 * @param extensionName - Name of the extension for debugging
 * @param localAttributes - Local override for allowed attributes (from extension options)
 * @returns Extended attributes object
 */
export declare function addCommonAttributes(parent: any, extensionName: string, localAttributes?: string[]): Record<string, ExtensionAttribute>;
/**
 * Helper to create a dynamic attributes function
 * 创建动态属性函数的辅助方法
 */
export declare function createAttributesFunction(extensionName: string, localAttributes?: string[]): (this: any) => Record<string, ExtensionAttribute>;
export { attributeRegistry };
