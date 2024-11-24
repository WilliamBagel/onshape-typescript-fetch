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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

import {
     BTExportModelArcEdgeGeometry1257FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTExportModelEdgeGeometry1125
 */
export interface BTExportModelEdgeGeometry1125 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTExportModelEdgeGeometry1125
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    endPoint?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    endVector?: BTVector3d389;
    /**
     * 
     * @type {number}
     * @memberof BTExportModelEdgeGeometry1125
     */
    length?: number;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    midPoint?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    quarterPoint?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    startPoint?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportModelEdgeGeometry1125
     */
    startVector?: BTVector3d389;
}

/**
 * Check if a given object implements the BTExportModelEdgeGeometry1125 interface.
 */
export function instanceOfBTExportModelEdgeGeometry1125(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelEdgeGeometry1125FromJSON(json: any): BTExportModelEdgeGeometry1125 {
    return BTExportModelEdgeGeometry1125FromJSONTyped(json, false);
}

export function BTExportModelEdgeGeometry1125FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelEdgeGeometry1125 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTExportModelArcEdgeGeometry-1257') {
            return BTExportModelArcEdgeGeometry1257FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'endPoint': !exists(json, 'endPoint') ? undefined : BTVector3d389FromJSON(json['endPoint']),
        'endVector': !exists(json, 'endVector') ? undefined : BTVector3d389FromJSON(json['endVector']),
        'length': !exists(json, 'length') ? undefined : json['length'],
        'midPoint': !exists(json, 'midPoint') ? undefined : BTVector3d389FromJSON(json['midPoint']),
        'quarterPoint': !exists(json, 'quarterPoint') ? undefined : BTVector3d389FromJSON(json['quarterPoint']),
        'startPoint': !exists(json, 'startPoint') ? undefined : BTVector3d389FromJSON(json['startPoint']),
        'startVector': !exists(json, 'startVector') ? undefined : BTVector3d389FromJSON(json['startVector']),
    };
}

export function BTExportModelEdgeGeometry1125ToJSON(value?: BTExportModelEdgeGeometry1125 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'endPoint': BTVector3d389ToJSON(value.endPoint),
        'endVector': BTVector3d389ToJSON(value.endVector),
        'length': value.length,
        'midPoint': BTVector3d389ToJSON(value.midPoint),
        'quarterPoint': BTVector3d389ToJSON(value.quarterPoint),
        'startPoint': BTVector3d389ToJSON(value.startPoint),
        'startVector': BTVector3d389ToJSON(value.startVector),
    };
}

