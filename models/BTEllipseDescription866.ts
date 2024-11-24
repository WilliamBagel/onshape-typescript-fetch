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
import type { BTCurveDescription1583 } from './BTCurveDescription1583';
import {
    BTCurveDescription1583FromJSON,
    BTCurveDescription1583FromJSONTyped,
    BTCurveDescription1583ToJSON,
} from './BTCurveDescription1583';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTCurveTypeEnum } from './GBTCurveTypeEnum';
import {
    GBTCurveTypeEnumFromJSON,
    GBTCurveTypeEnumFromJSONTyped,
    GBTCurveTypeEnumToJSON,
} from './GBTCurveTypeEnum';

/**
 * 
 * @export
 * @interface BTEllipseDescription866
 */
export interface BTEllipseDescription866 extends BTCurveDescription1583 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTEllipseDescription866
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTEllipseDescription866
     */
    majorAxis?: BTVector3d389;
    /**
     * 
     * @type {number}
     * @memberof BTEllipseDescription866
     */
    majorRadius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTEllipseDescription866
     */
    minorRadius?: number;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTEllipseDescription866
     */
    normal?: BTVector3d389;
}

/**
 * Check if a given object implements the BTEllipseDescription866 interface.
 */
export function instanceOfBTEllipseDescription866(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEllipseDescription866FromJSON(json: any): BTEllipseDescription866 {
    return BTEllipseDescription866FromJSONTyped(json, false);
}

export function BTEllipseDescription866FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEllipseDescription866 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTCurveDescription1583FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'majorAxis': !exists(json, 'majorAxis') ? undefined : BTVector3d389FromJSON(json['majorAxis']),
        'majorRadius': !exists(json, 'majorRadius') ? undefined : json['majorRadius'],
        'minorRadius': !exists(json, 'minorRadius') ? undefined : json['minorRadius'],
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
    };
}

export function BTEllipseDescription866ToJSON(value?: BTEllipseDescription866 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTCurveDescription1583ToJSON(value),
        'btType': value.btType,
        'majorAxis': BTVector3d389ToJSON(value.majorAxis),
        'majorRadius': value.majorRadius,
        'minorRadius': value.minorRadius,
        'normal': BTVector3d389ToJSON(value.normal),
    };
}

