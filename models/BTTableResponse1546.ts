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
import type { BTTable1825 } from './BTTable1825';
import {
    BTTable1825FromJSON,
    BTTable1825FromJSONTyped,
    BTTable1825ToJSON,
} from './BTTable1825';

/**
 * 
 * @export
 * @interface BTTableResponse1546
 */
export interface BTTableResponse1546 {
    /**
     * 
     * @type {string}
     * @memberof BTTableResponse1546
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableResponse1546
     */
    sourceMicroversion?: string;
    /**
     * 
     * @type {BTTable1825}
     * @memberof BTTableResponse1546
     */
    table?: BTTable1825;
}

/**
 * Check if a given object implements the BTTableResponse1546 interface.
 */
export function instanceOfBTTableResponse1546(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableResponse1546FromJSON(json: any): BTTableResponse1546 {
    return BTTableResponse1546FromJSONTyped(json, false);
}

export function BTTableResponse1546FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableResponse1546 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
        'table': !exists(json, 'table') ? undefined : BTTable1825FromJSON(json['table']),
    };
}

export function BTTableResponse1546ToJSON(value?: BTTableResponse1546 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'sourceMicroversion': value.sourceMicroversion,
        'table': BTTable1825ToJSON(value.table),
    };
}

