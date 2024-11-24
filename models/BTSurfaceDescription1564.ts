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
import type { GBTSurfaceTypeEnum } from './GBTSurfaceTypeEnum';
import {
    GBTSurfaceTypeEnumFromJSON,
    GBTSurfaceTypeEnumFromJSONTyped,
    GBTSurfaceTypeEnumToJSON,
} from './GBTSurfaceTypeEnum';

import {
     BTConeDescription860FromJSONTyped,
     BTCylinderDescription686FromJSONTyped,
     BTPlaneDescription692FromJSONTyped,
     BTSphereDescription1263FromJSONTyped,
     BTSpunDescription657FromJSONTyped,
     BTSweepDescription1473FromJSONTyped,
     BTTorusDescription1834FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTSurfaceDescription1564
 */
export interface BTSurfaceDescription1564 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSurfaceDescription1564
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSurfaceDescription1564
     */
    direction?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSurfaceDescription1564
     */
    directionOrientedWithFace?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSurfaceDescription1564
     */
    origin?: BTVector3d389;
    /**
     * 
     * @type {GBTSurfaceTypeEnum}
     * @memberof BTSurfaceDescription1564
     */
    type?: GBTSurfaceTypeEnum;
}

/**
 * Check if a given object implements the BTSurfaceDescription1564 interface.
 */
export function instanceOfBTSurfaceDescription1564(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSurfaceDescription1564FromJSON(json: any): BTSurfaceDescription1564 {
    return BTSurfaceDescription1564FromJSONTyped(json, false);
}

export function BTSurfaceDescription1564FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSurfaceDescription1564 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTConeDescription-860') {
            return BTConeDescription860FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTCylinderDescription-686') {
            return BTCylinderDescription686FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPlaneDescription-692') {
            return BTPlaneDescription692FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSphereDescription-1263') {
            return BTSphereDescription1263FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSpunDescription-657') {
            return BTSpunDescription657FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSweepDescription-1473') {
            return BTSweepDescription1473FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTorusDescription-1834') {
            return BTTorusDescription1834FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'direction': !exists(json, 'direction') ? undefined : BTVector3d389FromJSON(json['direction']),
        'directionOrientedWithFace': !exists(json, 'directionOrientedWithFace') ? undefined : BTVector3d389FromJSON(json['directionOrientedWithFace']),
        'origin': !exists(json, 'origin') ? undefined : BTVector3d389FromJSON(json['origin']),
        'type': !exists(json, 'type') ? undefined : GBTSurfaceTypeEnumFromJSON(json['type']),
    };
}

export function BTSurfaceDescription1564ToJSON(value?: BTSurfaceDescription1564 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'direction': BTVector3d389ToJSON(value.direction),
        'directionOrientedWithFace': BTVector3d389ToJSON(value.directionOrientedWithFace),
        'origin': BTVector3d389ToJSON(value.origin),
        'type': GBTSurfaceTypeEnumToJSON(value.type),
    };
}

