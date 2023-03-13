/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { BTQuantityRange181 } from './BTQuantityRange181';
import {
    BTQuantityRange181FromJSON,
    BTQuantityRange181FromJSONTyped,
    BTQuantityRange181ToJSON,
} from './BTQuantityRange181';

/**
 * 
 * @export
 * @interface BTParameterSpecQuantity173
 */
export interface BTParameterSpecQuantity173 extends BTParameterSpec6 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecQuantity173
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecQuantity173
     */
    quantityType?: BTParameterSpecQuantity173QuantityTypeEnum;
    /**
     * 
     * @type {Array<BTQuantityRange181>}
     * @memberof BTParameterSpecQuantity173
     */
    ranges?: Array<BTQuantityRange181>;
}


/**
 * @export
 */
export const BTParameterSpecQuantity173QuantityTypeEnum = {
    Unknown: 'UNKNOWN',
    Integer: 'INTEGER',
    Real: 'REAL',
    Length: 'LENGTH',
    Angle: 'ANGLE',
    Mass: 'MASS',
    Time: 'TIME',
    Temperature: 'TEMPERATURE',
    Current: 'CURRENT',
    Anything: 'ANYTHING',
    AnythingWithUnits: 'ANYTHING_WITH_UNITS',
    Force: 'FORCE',
    Pressure: 'PRESSURE',
    Moment: 'MOMENT',
    Acceleration: 'ACCELERATION',
    AngularVelocity: 'ANGULAR_VELOCITY',
    Energy: 'ENERGY',
    Area: 'AREA',
    Volume: 'VOLUME'
} as const;
export type BTParameterSpecQuantity173QuantityTypeEnum = typeof BTParameterSpecQuantity173QuantityTypeEnum[keyof typeof BTParameterSpecQuantity173QuantityTypeEnum];


/**
 * Check if a given object implements the BTParameterSpecQuantity173 interface.
 */
export function instanceOfBTParameterSpecQuantity173(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecQuantity173FromJSON(json: any): BTParameterSpecQuantity173 {
    return BTParameterSpecQuantity173FromJSONTyped(json, false);
}

export function BTParameterSpecQuantity173FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecQuantity173 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'quantityType': !exists(json, 'quantityType') ? undefined : json['quantityType'],
        'ranges': !exists(json, 'ranges') ? undefined : ((json['ranges'] as Array<any>).map(BTQuantityRange181FromJSON)),
    };
}

export function BTParameterSpecQuantity173ToJSON(value?: BTParameterSpecQuantity173 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6ToJSON(value),
        'btType': value.btType,
        'quantityType': value.quantityType,
        'ranges': value.ranges === undefined ? undefined : ((value.ranges as Array<any>).map(BTQuantityRange181ToJSON)),
    };
}
