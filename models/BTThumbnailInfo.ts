/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.176.31157-f17972084104
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTThumbnailSizeInfo } from './BTThumbnailSizeInfo';
import {
    BTThumbnailSizeInfoFromJSON,
    BTThumbnailSizeInfoFromJSONTyped,
    BTThumbnailSizeInfoToJSON,
} from './BTThumbnailSizeInfo';

/**
 * 
 * @export
 * @interface BTThumbnailInfo
 */
export interface BTThumbnailInfo {
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailInfo
     */
    id?: string;
    /**
     * 
     * @type {Array<Array<BTThumbnailSizeInfo>>}
     * @memberof BTThumbnailInfo
     */
    secondarySizes?: Array<Array<BTThumbnailSizeInfo>>;
    /**
     * 
     * @type {Array<BTThumbnailSizeInfo>}
     * @memberof BTThumbnailInfo
     */
    sizes?: Array<BTThumbnailSizeInfo>;
}

/**
 * Check if a given object implements the BTThumbnailInfo interface.
 */
export function instanceOfBTThumbnailInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTThumbnailInfoFromJSON(json: any): BTThumbnailInfo {
    return BTThumbnailInfoFromJSONTyped(json, false);
}

export function BTThumbnailInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTThumbnailInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'secondarySizes': !exists(json, 'secondarySizes') ? undefined : json['secondarySizes'],
        'sizes': !exists(json, 'sizes') ? undefined : ((json['sizes'] as Array<any>).map(BTThumbnailSizeInfoFromJSON)),
    };
}

export function BTThumbnailInfoToJSON(value?: BTThumbnailInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'id': value.id,
        'secondarySizes': value.secondarySizes,
        'sizes': value.sizes === undefined ? undefined : ((value.sizes as Array<any>).map(BTThumbnailSizeInfoToJSON)),
    };
}

