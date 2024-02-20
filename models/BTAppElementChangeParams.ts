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
/**
 * 
 * @export
 * @interface BTAppElementChangeParams
 */
export interface BTAppElementChangeParams {
    /**
     * This base64-encoded data is treated as a full representation of the sub-element's data and all deltas previously added will no longer be returned.
     * @type {string}
     * @memberof BTAppElementChangeParams
     */
    baseContent?: string;
    /**
     * This base64-encoded data is a delta which the application can apply to the last added baseContent data.
     * @type {string}
     * @memberof BTAppElementChangeParams
     */
    delta?: string;
    /**
     * The id of the subelement to edit. The value is determined by the application.
     * @type {string}
     * @memberof BTAppElementChangeParams
     */
    subelementId: string;
}

/**
 * Check if a given object implements the BTAppElementChangeParams interface.
 */
export function instanceOfBTAppElementChangeParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subelementId" in value;

    return isInstance;
}

export function BTAppElementChangeParamsFromJSON(json: any): BTAppElementChangeParams {
    return BTAppElementChangeParamsFromJSONTyped(json, false);
}

export function BTAppElementChangeParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementChangeParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseContent': !exists(json, 'baseContent') ? undefined : json['baseContent'],
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
        'subelementId': json['subelementId'],
    };
}

export function BTAppElementChangeParamsToJSON(value?: BTAppElementChangeParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseContent': value.baseContent,
        'delta': value.delta,
        'subelementId': value.subelementId,
    };
}

