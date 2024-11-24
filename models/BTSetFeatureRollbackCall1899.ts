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
import type { BTFeatureApiBase1430 } from './BTFeatureApiBase1430';
import {
    BTFeatureApiBase1430FromJSON,
    BTFeatureApiBase1430FromJSONTyped,
    BTFeatureApiBase1430ToJSON,
} from './BTFeatureApiBase1430';

/**
 * 
 * @export
 * @interface BTSetFeatureRollbackCall1899
 */
export interface BTSetFeatureRollbackCall1899 extends BTFeatureApiBase1430 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSetFeatureRollbackCall1899
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSetFeatureRollbackCall1899
     */
    rollbackIndex?: number;
}

/**
 * Check if a given object implements the BTSetFeatureRollbackCall1899 interface.
 */
export function instanceOfBTSetFeatureRollbackCall1899(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSetFeatureRollbackCall1899FromJSON(json: any): BTSetFeatureRollbackCall1899 {
    return BTSetFeatureRollbackCall1899FromJSONTyped(json, false);
}

export function BTSetFeatureRollbackCall1899FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSetFeatureRollbackCall1899 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureApiBase1430FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'rollbackIndex': !exists(json, 'rollbackIndex') ? undefined : json['rollbackIndex'],
    };
}

export function BTSetFeatureRollbackCall1899ToJSON(value?: BTSetFeatureRollbackCall1899 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureApiBase1430ToJSON(value),
        'btType': value.btType,
        'rollbackIndex': value.rollbackIndex,
    };
}

