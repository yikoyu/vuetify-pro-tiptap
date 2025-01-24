interface HttpRequestHeadersInterfaceMock {
    [id: string]: string | string[] | undefined;
}
interface HttpRequestInterfaceMock {
    headers: HttpRequestHeadersInterfaceMock;
    [id: string]: any;
}
export interface IsMobileOptions {
    ua?: string | HttpRequestInterfaceMock;
    tablet?: boolean;
    featureDetect?: boolean;
}
/**
 * Determines if the current device is a mobile or tablet device.
 * @param opts - Options for the detection.
 * @returns `true` if the device is mobile or tablet, `false` otherwise.
 */
export declare function isMobile(opts?: IsMobileOptions): boolean;
export {};
