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
import type { BTCacheDataPath191 } from './BTCacheDataPath191';
import {
    BTCacheDataPath191FromJSON,
    BTCacheDataPath191FromJSONTyped,
    BTCacheDataPath191ToJSON,
} from './BTCacheDataPath191';

/**
 * 
 * @export
 * @interface BTPartStudioDisplayDataReference4360AllOf
 */
export interface BTPartStudioDisplayDataReference4360AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTCacheDataPath191}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    cacheDataPath?: BTCacheDataPath191;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    tessellationSettings?: { [key: string]: Array<number>; };
}

/**
 * Check if a given object implements the BTPartStudioDisplayDataReference4360AllOf interface.
 */
export function instanceOfBTPartStudioDisplayDataReference4360AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartStudioDisplayDataReference4360AllOfFromJSON(json: any): BTPartStudioDisplayDataReference4360AllOf {
    return BTPartStudioDisplayDataReference4360AllOfFromJSONTyped(json, false);
}

export function BTPartStudioDisplayDataReference4360AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartStudioDisplayDataReference4360AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cacheDataPath': !exists(json, 'cacheDataPath') ? undefined : BTCacheDataPath191FromJSON(json['cacheDataPath']),
        'tessellationSettings': !exists(json, 'tessellationSettings') ? undefined : json['tessellationSettings'],
    };
}

export function BTPartStudioDisplayDataReference4360AllOfToJSON(value?: BTPartStudioDisplayDataReference4360AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'cacheDataPath': BTCacheDataPath191ToJSON(value.cacheDataPath),
        'tessellationSettings': value.tessellationSettings,
    };
}

