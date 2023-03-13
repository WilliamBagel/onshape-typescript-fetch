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
import type { BTMSketchGeomEntity5 } from './BTMSketchGeomEntity5';
import {
    BTMSketchGeomEntity5FromJSON,
    BTMSketchGeomEntity5FromJSONTyped,
    BTMSketchGeomEntity5ToJSON,
} from './BTMSketchGeomEntity5';

/**
 * 
 * @export
 * @interface BTMSketchPoint158
 */
export interface BTMSketchPoint158 extends BTMSketchGeomEntity5 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchPoint158
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchPoint158
     */
    isUserPoint?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchPoint158
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchPoint158
     */
    y?: number;
}

/**
 * Check if a given object implements the BTMSketchPoint158 interface.
 */
export function instanceOfBTMSketchPoint158(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchPoint158FromJSON(json: any): BTMSketchPoint158 {
    return BTMSketchPoint158FromJSONTyped(json, false);
}

export function BTMSketchPoint158FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchPoint158 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchGeomEntity5FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isUserPoint': !exists(json, 'isUserPoint') ? undefined : json['isUserPoint'],
        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
    };
}

export function BTMSketchPoint158ToJSON(value?: BTMSketchPoint158 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchGeomEntity5ToJSON(value),
        'btType': value.btType,
        'isUserPoint': value.isUserPoint,
        'x': value.x,
        'y': value.y,
    };
}
