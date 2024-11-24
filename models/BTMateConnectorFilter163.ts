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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTMateConnectorFilter163
 */
export interface BTMateConnectorFilter163 extends BTQueryFilter183 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMateConnectorFilter163
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateConnectorFilter163
     */
    requiresOccurrence?: boolean;
}

/**
 * Check if a given object implements the BTMateConnectorFilter163 interface.
 */
export function instanceOfBTMateConnectorFilter163(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateConnectorFilter163FromJSON(json: any): BTMateConnectorFilter163 {
    return BTMateConnectorFilter163FromJSONTyped(json, false);
}

export function BTMateConnectorFilter163FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateConnectorFilter163 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'requiresOccurrence': !exists(json, 'requiresOccurrence') ? undefined : json['requiresOccurrence'],
    };
}

export function BTMateConnectorFilter163ToJSON(value?: BTMateConnectorFilter163 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183ToJSON(value),
        'btType': value.btType,
        'requiresOccurrence': value.requiresOccurrence,
    };
}

