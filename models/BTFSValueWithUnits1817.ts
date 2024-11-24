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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';

/**
 * 
 * @export
 * @interface BTFSValueWithUnits1817
 */
export interface BTFSValueWithUnits1817 extends BTFSValue1888 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTFSValueWithUnits1817
     */
    btType: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTFSValueWithUnits1817
     */
    unitToPower?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof BTFSValueWithUnits1817
     */
    value?: number;
}

/**
 * Check if a given object implements the BTFSValueWithUnits1817 interface.
 */
export function instanceOfBTFSValueWithUnits1817(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTFSValueWithUnits1817FromJSON(json: any): BTFSValueWithUnits1817 {
    return BTFSValueWithUnits1817FromJSONTyped(json, false);
}

export function BTFSValueWithUnits1817FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSValueWithUnits1817 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFSValue1888FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'unitToPower': !exists(json, 'unitToPower') ? undefined : json['unitToPower'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTFSValueWithUnits1817ToJSON(value?: BTFSValueWithUnits1817 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFSValue1888ToJSON(value),
        'btType': value.btType,
        'unitToPower': value.unitToPower,
        'value': value.value,
    };
}

