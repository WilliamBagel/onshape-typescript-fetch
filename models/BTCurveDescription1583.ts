/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15457-d8ebaa9b9e42
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
import type { GBTCurveTypeEnum } from './GBTCurveTypeEnum';
import {
    GBTCurveTypeEnumFromJSON,
    GBTCurveTypeEnumFromJSONTyped,
    GBTCurveTypeEnumToJSON,
} from './GBTCurveTypeEnum';

import {
     BTCircleDescription1145FromJSONTyped,
     BTEllipseDescription866FromJSONTyped,
     BTLineDescription1559FromJSONTyped,
     BTSplineDescription2118FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTCurveDescription1583
 */
export interface BTCurveDescription1583 {
    /**
     * 
     * @type {string}
     * @memberof BTCurveDescription1583
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTCurveDescription1583
     */
    direction?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTCurveDescription1583
     */
    directionOrientedWithFace?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTCurveDescription1583
     */
    origin?: BTVector3d389;
    /**
     * 
     * @type {GBTCurveTypeEnum}
     * @memberof BTCurveDescription1583
     */
    type?: GBTCurveTypeEnum;
}

/**
 * Check if a given object implements the BTCurveDescription1583 interface.
 */
export function instanceOfBTCurveDescription1583(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveDescription1583FromJSON(json: any): BTCurveDescription1583 {
    return BTCurveDescription1583FromJSONTyped(json, false);
}

export function BTCurveDescription1583FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveDescription1583 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTCircleDescription-1145') {
            return BTCircleDescription1145FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTEllipseDescription-866') {
            return BTEllipseDescription866FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTLineDescription-1559') {
            return BTLineDescription1559FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSplineDescription-2118') {
            return BTSplineDescription2118FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'direction': !exists(json, 'direction') ? undefined : BTVector3d389FromJSON(json['direction']),
        'directionOrientedWithFace': !exists(json, 'directionOrientedWithFace') ? undefined : BTVector3d389FromJSON(json['directionOrientedWithFace']),
        'origin': !exists(json, 'origin') ? undefined : BTVector3d389FromJSON(json['origin']),
        'type': !exists(json, 'type') ? undefined : GBTCurveTypeEnumFromJSON(json['type']),
    };
}

export function BTCurveDescription1583ToJSON(value?: BTCurveDescription1583 | null): any {
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
        'type': GBTCurveTypeEnumToJSON(value.type),
    };
}

