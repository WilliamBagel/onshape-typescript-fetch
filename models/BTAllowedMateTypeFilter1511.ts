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
import type { BTMateFilter162 } from './BTMateFilter162';
import {
    BTMateFilter162FromJSON,
    BTMateFilter162FromJSONTyped,
    BTMateFilter162ToJSON,
 BTMateFilter162SuperToJSON,
} from './BTMateFilter162';
import type { GBTMateType } from './GBTMateType';
import {
    GBTMateTypeFromJSON,
    GBTMateTypeFromJSONTyped,
    GBTMateTypeToJSON,
} from './GBTMateType';

/**
 * 
 * @export
 * @interface BTAllowedMateTypeFilter1511
 */
export interface BTAllowedMateTypeFilter1511 extends BTMateFilter162 {
    /**
     * 
     * @type {string}
     * @memberof BTAllowedMateTypeFilter1511
     */
    btType?: string;
    /**
     * 
     * @type {Array<GBTMateType>}
     * @memberof BTAllowedMateTypeFilter1511
     */
    allowedMateTypes?: Array<GBTMateType>;
}

/**
 * Check if a given object implements the BTAllowedMateTypeFilter1511 interface.
 */
export function instanceOfBTAllowedMateTypeFilter1511(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAllowedMateTypeFilter1511FromJSON(json: any): BTAllowedMateTypeFilter1511 {
    return BTAllowedMateTypeFilter1511FromJSONTyped(json, false);
}

export function BTAllowedMateTypeFilter1511FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAllowedMateTypeFilter1511 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMateFilter162FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'allowedMateTypes': !exists(json, 'allowedMateTypes') ? undefined : ((json['allowedMateTypes'] as Array<any>).map(GBTMateTypeFromJSON)),
    };
}

export function BTAllowedMateTypeFilter1511ToJSON(value?: BTAllowedMateTypeFilter1511 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMateFilter162SuperToJSON(value),
        'btType': value.btType,
        'allowedMateTypes': value.allowedMateTypes === undefined ? undefined : ((value.allowedMateTypes as Array<any>).map(GBTMateTypeToJSON)),
    };
}

