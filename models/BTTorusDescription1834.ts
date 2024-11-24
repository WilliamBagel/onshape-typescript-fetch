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
import type { BTSurfaceDescription1564 } from './BTSurfaceDescription1564';
import {
    BTSurfaceDescription1564FromJSON,
    BTSurfaceDescription1564FromJSONTyped,
    BTSurfaceDescription1564ToJSON,
} from './BTSurfaceDescription1564';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTSurfaceTypeEnum } from './GBTSurfaceTypeEnum';
import {
    GBTSurfaceTypeEnumFromJSON,
    GBTSurfaceTypeEnumFromJSONTyped,
    GBTSurfaceTypeEnumToJSON,
} from './GBTSurfaceTypeEnum';

/**
 * 
 * @export
 * @interface BTTorusDescription1834
 */
export interface BTTorusDescription1834 extends BTSurfaceDescription1564 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTorusDescription1834
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTTorusDescription1834
     */
    axis?: BTVector3d389;
    /**
     * 
     * @type {number}
     * @memberof BTTorusDescription1834
     */
    majorRadius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTTorusDescription1834
     */
    minorRadius?: number;
}

/**
 * Check if a given object implements the BTTorusDescription1834 interface.
 */
export function instanceOfBTTorusDescription1834(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTorusDescription1834FromJSON(json: any): BTTorusDescription1834 {
    return BTTorusDescription1834FromJSONTyped(json, false);
}

export function BTTorusDescription1834FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTorusDescription1834 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSurfaceDescription1564FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'axis': !exists(json, 'axis') ? undefined : BTVector3d389FromJSON(json['axis']),
        'majorRadius': !exists(json, 'majorRadius') ? undefined : json['majorRadius'],
        'minorRadius': !exists(json, 'minorRadius') ? undefined : json['minorRadius'],
    };
}

export function BTTorusDescription1834ToJSON(value?: BTTorusDescription1834 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSurfaceDescription1564ToJSON(value),
        'btType': value.btType,
        'axis': BTVector3d389ToJSON(value.axis),
        'majorRadius': value.majorRadius,
        'minorRadius': value.minorRadius,
    };
}

