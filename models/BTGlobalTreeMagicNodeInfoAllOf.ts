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
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';

/**
 * 
 * @export
 * @interface BTGlobalTreeMagicNodeInfoAllOf
 */
export interface BTGlobalTreeMagicNodeInfoAllOf {
    /**
     * 
     * @type {number}
     * @memberof BTGlobalTreeMagicNodeInfoAllOf
     */
    subType?: number;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTGlobalTreeMagicNodeInfoAllOf
     */
    thumbnail?: BTThumbnailInfo;
}

/**
 * Check if a given object implements the BTGlobalTreeMagicNodeInfoAllOf interface.
 */
export function instanceOfBTGlobalTreeMagicNodeInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGlobalTreeMagicNodeInfoAllOfFromJSON(json: any): BTGlobalTreeMagicNodeInfoAllOf {
    return BTGlobalTreeMagicNodeInfoAllOfFromJSONTyped(json, false);
}

export function BTGlobalTreeMagicNodeInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGlobalTreeMagicNodeInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subType': !exists(json, 'subType') ? undefined : json['subType'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
    };
}

export function BTGlobalTreeMagicNodeInfoAllOfToJSON(value?: BTGlobalTreeMagicNodeInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subType': value.subType,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
    };
}

