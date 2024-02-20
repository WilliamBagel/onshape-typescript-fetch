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
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';

/**
 * 
 * @export
 * @interface BTParameterSpecArray2600AllOf
 */
export interface BTParameterSpecArray2600AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    drivenQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    itemLabelTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    itemName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecArray2600AllOf
     */
    maxNumberOfPicks?: number;
    /**
     * 
     * @type {Array<BTParameterSpec6>}
     * @memberof BTParameterSpecArray2600AllOf
     */
    parameters?: Array<BTParameterSpec6>;
}

/**
 * Check if a given object implements the BTParameterSpecArray2600AllOf interface.
 */
export function instanceOfBTParameterSpecArray2600AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecArray2600AllOfFromJSON(json: any): BTParameterSpecArray2600AllOf {
    return BTParameterSpecArray2600AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecArray2600AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecArray2600AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'drivenQuery': !exists(json, 'drivenQuery') ? undefined : json['drivenQuery'],
        'itemLabelTemplate': !exists(json, 'itemLabelTemplate') ? undefined : json['itemLabelTemplate'],
        'itemName': !exists(json, 'itemName') ? undefined : json['itemName'],
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTParameterSpec6FromJSON)),
    };
}

export function BTParameterSpecArray2600AllOfToJSON(value?: BTParameterSpecArray2600AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'drivenQuery': value.drivenQuery,
        'itemLabelTemplate': value.itemLabelTemplate,
        'itemName': value.itemName,
        'maxNumberOfPicks': value.maxNumberOfPicks,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTParameterSpec6ToJSON)),
    };
}

