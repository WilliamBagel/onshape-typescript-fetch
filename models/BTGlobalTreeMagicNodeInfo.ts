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
import type { BTGlobalTreeNodeInfo } from './BTGlobalTreeNodeInfo';
import {
    BTGlobalTreeNodeInfoFromJSON,
    BTGlobalTreeNodeInfoFromJSONTyped,
    BTGlobalTreeNodeInfoToJSON,
 BTGlobalTreeNodeInfoSuperToJSON,
} from './BTGlobalTreeNodeInfo';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';

/**
 * 
 * @export
 * @interface BTGlobalTreeMagicNodeInfo
 */
export interface BTGlobalTreeMagicNodeInfo extends BTGlobalTreeNodeInfo {
    /**
     * 
     * @type {number}
     * @memberof BTGlobalTreeMagicNodeInfo
     */
    subType?: number;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTGlobalTreeMagicNodeInfo
     */
    thumbnail?: BTThumbnailInfo;
}

/**
 * Check if a given object implements the BTGlobalTreeMagicNodeInfo interface.
 */
export function instanceOfBTGlobalTreeMagicNodeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGlobalTreeMagicNodeInfoFromJSON(json: any): BTGlobalTreeMagicNodeInfo {
    return BTGlobalTreeMagicNodeInfoFromJSONTyped(json, false);
}

export function BTGlobalTreeMagicNodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGlobalTreeMagicNodeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTGlobalTreeNodeInfoFromJSONTyped(json, ignoreDiscriminator),
        'subType': !exists(json, 'subType') ? undefined : json['subType'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
    };
}

export function BTGlobalTreeMagicNodeInfoToJSON(value?: BTGlobalTreeMagicNodeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTGlobalTreeNodeInfoSuperToJSON(value),
        'subType': value.subType,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
    };
}

