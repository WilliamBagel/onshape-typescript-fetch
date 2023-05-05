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
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';

/**
 * 
 * @export
 * @interface BTMParameterAppearance627AllOf
 */
export interface BTMParameterAppearance627AllOf {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTMParameterAppearance627AllOf
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterAppearance627AllOf
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMParameterAppearance627AllOf interface.
 */
export function instanceOfBTMParameterAppearance627AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterAppearance627AllOfFromJSON(json: any): BTMParameterAppearance627AllOf {
    return BTMParameterAppearance627AllOfFromJSONTyped(json, false);
}

export function BTMParameterAppearance627AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterAppearance627AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMParameterAppearance627AllOfToJSON(value?: BTMParameterAppearance627AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'btType': value.btType,
    };
}

