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
import type { GBTMetadataSourceType } from './GBTMetadataSourceType';
import {
    GBTMetadataSourceTypeFromJSON,
    GBTMetadataSourceTypeFromJSONTyped,
    GBTMetadataSourceTypeToJSON,
} from './GBTMetadataSourceType';

/**
 * 
 * @export
 * @interface BTPartMetadataSource2895
 */
export interface BTPartMetadataSource2895 {
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataSource2895
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataSource2895
     */
    sourceId?: string;
    /**
     * 
     * @type {GBTMetadataSourceType}
     * @memberof BTPartMetadataSource2895
     */
    sourceType?: GBTMetadataSourceType;
}

/**
 * Check if a given object implements the BTPartMetadataSource2895 interface.
 */
export function instanceOfBTPartMetadataSource2895(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartMetadataSource2895FromJSON(json: any): BTPartMetadataSource2895 {
    return BTPartMetadataSource2895FromJSONTyped(json, false);
}

export function BTPartMetadataSource2895FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartMetadataSource2895 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'sourceType': !exists(json, 'sourceType') ? undefined : GBTMetadataSourceTypeFromJSON(json['sourceType']),
    };
}

export function BTPartMetadataSource2895ToJSON(value?: BTPartMetadataSource2895 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'sourceId': value.sourceId,
        'sourceType': GBTMetadataSourceTypeToJSON(value.sourceType),
    };
}

