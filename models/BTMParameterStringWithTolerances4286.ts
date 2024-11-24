/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMReadOnlyParameter3800 } from './BTMReadOnlyParameter3800';
import {
    BTMReadOnlyParameter3800FromJSON,
    BTMReadOnlyParameter3800FromJSONTyped,
    BTMReadOnlyParameter3800ToJSON,
} from './BTMReadOnlyParameter3800';
import type { BTToleranceString3274 } from './BTToleranceString3274';
import {
    BTToleranceString3274FromJSON,
    BTToleranceString3274FromJSONTyped,
    BTToleranceString3274ToJSON,
} from './BTToleranceString3274';

/**
 * 
 * @export
 * @interface BTMParameterStringWithTolerances4286
 */
export interface BTMParameterStringWithTolerances4286 extends BTMReadOnlyParameter3800 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterStringWithTolerances4286
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTToleranceString3274>}
     * @memberof BTMParameterStringWithTolerances4286
     */
    components?: Array<BTToleranceString3274>;
}

/**
 * Check if a given object implements the BTMParameterStringWithTolerances4286 interface.
 */
export function instanceOfBTMParameterStringWithTolerances4286(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterStringWithTolerances4286FromJSON(json: any): BTMParameterStringWithTolerances4286 {
    return BTMParameterStringWithTolerances4286FromJSONTyped(json, false);
}

export function BTMParameterStringWithTolerances4286FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterStringWithTolerances4286 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMReadOnlyParameter3800FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'components': !exists(json, 'components') ? undefined : ((json['components'] as Array<any>).map(BTToleranceString3274FromJSON)),
    };
}

export function BTMParameterStringWithTolerances4286ToJSON(value?: BTMParameterStringWithTolerances4286 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMReadOnlyParameter3800ToJSON(value),
        'btType': value.btType,
        'components': value.components === undefined ? undefined : ((value.components as Array<any>).map(BTToleranceString3274ToJSON)),
    };
}

