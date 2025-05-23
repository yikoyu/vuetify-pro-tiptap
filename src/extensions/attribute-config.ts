import type { ExtensionAttribute } from "@tiptap/core";

export interface AttributeConfigOptions {
  allowedAttributes?: string[];
}

/**
 * 全局属性注册中心
 */
class AttributeRegistry {
  private globalAttributes: string[] = ["class", "style", "id", "data-*"]; // 默认属性
  private isInitialized = false;

  /**
   * 注册全局允许的属性（通常由 HtmlView 扩展调用）
   */
  registerGlobalAttributes(attributes: string[]): void {
    if (attributes && attributes.length > 0) {
      this.globalAttributes = [...attributes];
      this.isInitialized = true;
      console.log(
        "Global allowedAttributes registered:",
        this.globalAttributes,
      );
    }
  }

  /**
   * 获取全局允许的属性
   */
  getGlobalAttributes(): string[] {
    return [...this.globalAttributes];
  }

  /**
   * 检查是否已初始化
   */
  isGlobalInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * 重置注册表（用于测试）
   */
  reset(): void {
    this.globalAttributes = ["class", "style", "id"];
    this.isInitialized = false;
  }
}

// 创建全局单例
const attributeRegistry = new AttributeRegistry();

/**
 * 注册全局允许的属性（由 HtmlView 扩展调用）
 */
export function registerGlobalAllowedAttributes(attributes: string[]): void {
  attributeRegistry.registerGlobalAttributes(attributes);
}

/**
 * 获取全局允许的属性
 */
export function getGlobalAllowedAttributes(): string[] {
  return attributeRegistry.getGlobalAttributes();
}

/**
 * 检查全局属性是否已初始化
 */
export function isGlobalAttributesInitialized(): boolean {
  return attributeRegistry.isGlobalInitialized();
}

/**
 * Create common HTML attributes for an extension
 * 为扩展创建通用的HTML属性
 *
 * @param parent - The parent extension's addAttributes result
 * @param extensionName - Name of the extension for debugging
 * @param localAttributes - Local override for allowed attributes (from extension options)
 * @returns Extended attributes object
 */
export function addCommonAttributes(
  parent: any,
  extensionName: string,
  localAttributes?: string[],
): Record<string, ExtensionAttribute> {
  // 优先级：本地配置 > 全局配置 > 默认配置
  let attributesToAdd: string[];

  if (localAttributes && localAttributes.length > 0) {
    // 使用本地配置
    attributesToAdd = localAttributes;
  } else {
    // 使用全局配置
    attributesToAdd = getGlobalAllowedAttributes();
  }

  console.log(`Adding common attributes to ${extensionName}:`, {
    local: localAttributes,
    global: getGlobalAllowedAttributes(),
    final: attributesToAdd,
    globalInitialized: isGlobalAttributesInitialized(),
  });

  // Start with parent attributes
  const attributes = parent ? { ...parent } : {};

  // Add each allowed attribute if it doesn't already exist
  attributesToAdd.forEach((attr) => {
    if (!attributes[attr]) {
      attributes[attr] = {
        default: null,
        parseHTML: (element: HTMLElement) => {
          return element.getAttribute(attr) || null;
        },
        renderHTML: (attrs: Record<string, any>) => {
          if (!attrs[attr]) return {};
          return { [attr]: attrs[attr] };
        },
      };
    }
  });

  return attributes;
}

/**
 * Helper to create a dynamic attributes function
 * 创建动态属性函数的辅助方法
 */
export function createAttributesFunction(
  extensionName: string,
  localAttributes?: string[],
) {
  return function (this: any) {
    return addCommonAttributes(this.parent?.(), extensionName, localAttributes);
  };
}

// 导出注册表实例（用于调试）
export { attributeRegistry };
