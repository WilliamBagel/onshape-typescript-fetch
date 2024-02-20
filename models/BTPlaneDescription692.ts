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
import type { BTSurfaceDescription1564 } from './BTSurfaceDescription1564';
import {
    BTSurfaceDescription1564FromJSON,
    BTSurfaceDescription1564FromJSONTyped,
    BTSurfaceDescription1564ToJSON,
 BTSurfaceDescription1564SuperToJSON,
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
 * @interface BTPlaneDescription692
 */
export interface BTPlaneDescription692 extends BTSurfaceDescription1564 {
    /**
     * 
     * @type {string}
     * @memberof BTPlaneDescription692
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPlaneDescription692
     */
    isOrientedWithFace?: boolean;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTPlaneDescription692
     */
    normal?: BTVector3d389;
}

/**
 * Check if a given object implements the BTPlaneDescription692 interface.
 */
export function instanceOfBTPlaneDescription692(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPlaneDescription692FromJSON(json: any): BTPlaneDescription692 {
    return BTPlaneDescription692FromJSONTyped(json, false);
}

export function BTPlaneDescription692FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPlaneDescription692 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSurfaceDescription1564FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isOrientedWithFace': !exists(json, 'isOrientedWithFace') ? undefined : json['isOrientedWithFace'],
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
    };
}

export function BTPlaneDescription692ToJSON(value?: BTPlaneDescription692 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSurfaceDescription1564SuperToJSON(value),
        'btType': value.btType,
        'isOrientedWithFace': value.isOrientedWithFace,
        'normal': BTVector3d389ToJSON(value.normal),
    };
}

