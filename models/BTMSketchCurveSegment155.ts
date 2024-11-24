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
import type { BTCurveGeometry114 } from './BTCurveGeometry114';
import {
    BTCurveGeometry114FromJSON,
    BTCurveGeometry114FromJSONTyped,
    BTCurveGeometry114ToJSON,
} from './BTCurveGeometry114';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchCurve4 } from './BTMSketchCurve4';
import {
    BTMSketchCurve4FromJSON,
    BTMSketchCurve4FromJSONTyped,
    BTMSketchCurve4ToJSON,
} from './BTMSketchCurve4';

/**
 * 
 * @export
 * @interface BTMSketchCurveSegment155
 */
export interface BTMSketchCurveSegment155 extends BTMSketchCurve4 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchCurveSegment155
     */
    endParam?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    endPointId?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMSketchCurveSegment155
     */
    offsetCurveExtensions?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchCurveSegment155
     */
    startParam?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    startPointId?: string;
}

/**
 * Check if a given object implements the BTMSketchCurveSegment155 interface.
 */
export function instanceOfBTMSketchCurveSegment155(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchCurveSegment155FromJSON(json: any): BTMSketchCurveSegment155 {
    return BTMSketchCurveSegment155FromJSONTyped(json, false);
}

export function BTMSketchCurveSegment155FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchCurveSegment155 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchCurve4FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'endParam': !exists(json, 'endParam') ? undefined : json['endParam'],
        'endPointId': !exists(json, 'endPointId') ? undefined : json['endPointId'],
        'offsetCurveExtensions': !exists(json, 'offsetCurveExtensions') ? undefined : json['offsetCurveExtensions'],
        'startParam': !exists(json, 'startParam') ? undefined : json['startParam'],
        'startPointId': !exists(json, 'startPointId') ? undefined : json['startPointId'],
    };
}

export function BTMSketchCurveSegment155ToJSON(value?: BTMSketchCurveSegment155 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchCurve4ToJSON(value),
        'btType': value.btType,
        'endParam': value.endParam,
        'endPointId': value.endPointId,
        'offsetCurveExtensions': value.offsetCurveExtensions,
        'startParam': value.startParam,
        'startPointId': value.startPointId,
    };
}

