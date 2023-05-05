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

/**
 * 
 * @export
 * @interface BTGraphicsSectionPlaneData1429
 */
export interface BTGraphicsSectionPlaneData1429 {
    /**
     * 
     * @type {string}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    center?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    normal?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    tangent?: BTVector3d389;
}

/**
 * Check if a given object implements the BTGraphicsSectionPlaneData1429 interface.
 */
export function instanceOfBTGraphicsSectionPlaneData1429(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGraphicsSectionPlaneData1429FromJSON(json: any): BTGraphicsSectionPlaneData1429 {
    return BTGraphicsSectionPlaneData1429FromJSONTyped(json, false);
}

export function BTGraphicsSectionPlaneData1429FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGraphicsSectionPlaneData1429 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'center': !exists(json, 'center') ? undefined : BTVector3d389FromJSON(json['center']),
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
        'tangent': !exists(json, 'tangent') ? undefined : BTVector3d389FromJSON(json['tangent']),
    };
}

export function BTGraphicsSectionPlaneData1429ToJSON(value?: BTGraphicsSectionPlaneData1429 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'center': BTVector3d389ToJSON(value.center),
        'normal': BTVector3d389ToJSON(value.normal),
        'tangent': BTVector3d389ToJSON(value.tangent),
    };
}

