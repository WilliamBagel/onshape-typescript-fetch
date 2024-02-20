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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTDimensionDisplayData323 } from './BTDimensionDisplayData323';
import {
    BTDimensionDisplayData323FromJSON,
    BTDimensionDisplayData323FromJSONTyped,
    BTDimensionDisplayData323ToJSON,
 BTDimensionDisplayData323SuperToJSON,
} from './BTDimensionDisplayData323';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

/**
 * 
 * @export
 * @interface BTRhoDimensionDisplayData2892
 */
export interface BTRhoDimensionDisplayData2892 extends BTDimensionDisplayData323 {
    /**
     * 
     * @type {string}
     * @memberof BTRhoDimensionDisplayData2892
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRhoDimensionDisplayData2892
     */
    positionX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRhoDimensionDisplayData2892
     */
    positionY?: number;
}

/**
 * Check if a given object implements the BTRhoDimensionDisplayData2892 interface.
 */
export function instanceOfBTRhoDimensionDisplayData2892(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRhoDimensionDisplayData2892FromJSON(json: any): BTRhoDimensionDisplayData2892 {
    return BTRhoDimensionDisplayData2892FromJSONTyped(json, false);
}

export function BTRhoDimensionDisplayData2892FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRhoDimensionDisplayData2892 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDimensionDisplayData323FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionX': !exists(json, 'positionX') ? undefined : json['positionX'],
        'positionY': !exists(json, 'positionY') ? undefined : json['positionY'],
    };
}

export function BTRhoDimensionDisplayData2892ToJSON(value?: BTRhoDimensionDisplayData2892 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDimensionDisplayData323SuperToJSON(value),
        'btType': value.btType,
        'positionX': value.positionX,
        'positionY': value.positionY,
    };
}

