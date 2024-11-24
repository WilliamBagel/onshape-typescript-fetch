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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTTessellatedGeometry2576 } from './BTTessellatedGeometry2576';
import {
    BTTessellatedGeometry2576FromJSON,
    BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON,
} from './BTTessellatedGeometry2576';

/**
 * 
 * @export
 * @interface BTEntityDegenerateEdge1129
 */
export interface BTEntityDegenerateEdge1129 extends BTTessellatedGeometry2576 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTEntityDegenerateEdge1129
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTEntityDegenerateEdge1129
     */
    point?: Array<number>;
}

/**
 * Check if a given object implements the BTEntityDegenerateEdge1129 interface.
 */
export function instanceOfBTEntityDegenerateEdge1129(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityDegenerateEdge1129FromJSON(json: any): BTEntityDegenerateEdge1129 {
    return BTEntityDegenerateEdge1129FromJSONTyped(json, false);
}

export function BTEntityDegenerateEdge1129FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityDegenerateEdge1129 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTessellatedGeometry2576FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'point': !exists(json, 'point') ? undefined : json['point'],
    };
}

export function BTEntityDegenerateEdge1129ToJSON(value?: BTEntityDegenerateEdge1129 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTessellatedGeometry2576ToJSON(value),
        'btType': value.btType,
        'point': value.point,
    };
}

