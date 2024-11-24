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
import type { BTExportModelEdgeGeometry1125 } from './BTExportModelEdgeGeometry1125';
import {
    BTExportModelEdgeGeometry1125FromJSON,
    BTExportModelEdgeGeometry1125FromJSONTyped,
    BTExportModelEdgeGeometry1125ToJSON,
} from './BTExportModelEdgeGeometry1125';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTExportModelArcEdgeGeometry1257
 */
export interface BTExportModelArcEdgeGeometry1257 extends BTExportModelEdgeGeometry1125 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    arcIsClockwise?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    arcSweep?: number;
}

/**
 * Check if a given object implements the BTExportModelArcEdgeGeometry1257 interface.
 */
export function instanceOfBTExportModelArcEdgeGeometry1257(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelArcEdgeGeometry1257FromJSON(json: any): BTExportModelArcEdgeGeometry1257 {
    return BTExportModelArcEdgeGeometry1257FromJSONTyped(json, false);
}

export function BTExportModelArcEdgeGeometry1257FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelArcEdgeGeometry1257 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTExportModelEdgeGeometry1125FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'arcIsClockwise': !exists(json, 'arcIsClockwise') ? undefined : json['arcIsClockwise'],
        'arcSweep': !exists(json, 'arcSweep') ? undefined : json['arcSweep'],
    };
}

export function BTExportModelArcEdgeGeometry1257ToJSON(value?: BTExportModelArcEdgeGeometry1257 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTExportModelEdgeGeometry1125ToJSON(value),
        'btType': value.btType,
        'arcIsClockwise': value.arcIsClockwise,
        'arcSweep': value.arcSweep,
    };
}

