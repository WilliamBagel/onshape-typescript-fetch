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
import type { BTMConfiguredValue1341 } from './BTMConfiguredValue1341';
import {
    BTMConfiguredValue1341FromJSON,
    BTMConfiguredValue1341FromJSONTyped,
    BTMConfiguredValue1341ToJSON,
} from './BTMConfiguredValue1341';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMParameterConfigured2222
 */
export interface BTMParameterConfigured2222 extends BTMParameter1 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterConfigured2222
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterConfigured2222
     */
    configurationParameterId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterConfigured2222
     */
    configurationParameterIdFieldIndex?: number;
    /**
     * 
     * @type {Array<BTMConfiguredValue1341>}
     * @memberof BTMParameterConfigured2222
     */
    values?: Array<BTMConfiguredValue1341>;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterConfigured2222
     */
    valuesFieldIndex?: number;
}

/**
 * Check if a given object implements the BTMParameterConfigured2222 interface.
 */
export function instanceOfBTMParameterConfigured2222(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterConfigured2222FromJSON(json: any): BTMParameterConfigured2222 {
    return BTMParameterConfigured2222FromJSONTyped(json, false);
}

export function BTMParameterConfigured2222FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterConfigured2222 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configurationParameterId': !exists(json, 'configurationParameterId') ? undefined : json['configurationParameterId'],
        'configurationParameterIdFieldIndex': !exists(json, 'configurationParameterIdFieldIndex') ? undefined : json['configurationParameterIdFieldIndex'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(BTMConfiguredValue1341FromJSON)),
        'valuesFieldIndex': !exists(json, 'valuesFieldIndex') ? undefined : json['valuesFieldIndex'],
    };
}

export function BTMParameterConfigured2222ToJSON(value?: BTMParameterConfigured2222 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1ToJSON(value),
        'btType': value.btType,
        'configurationParameterId': value.configurationParameterId,
        'configurationParameterIdFieldIndex': value.configurationParameterIdFieldIndex,
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(BTMConfiguredValue1341ToJSON)),
        'valuesFieldIndex': value.valuesFieldIndex,
    };
}

