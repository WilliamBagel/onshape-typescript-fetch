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
import type { BTParameterVisibilityOnEqual180 } from './BTParameterVisibilityOnEqual180';
import {
    BTParameterVisibilityOnEqual180FromJSON,
    BTParameterVisibilityOnEqual180FromJSONTyped,
    BTParameterVisibilityOnEqual180ToJSON,
} from './BTParameterVisibilityOnEqual180';

/**
 * 
 * @export
 * @interface BTParameterVisibilityOnMateDOFType2114
 */
export interface BTParameterVisibilityOnMateDOFType2114 extends BTParameterVisibilityOnEqual180 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnMateDOFType2114
     */
    btType: string;
}

/**
 * Check if a given object implements the BTParameterVisibilityOnMateDOFType2114 interface.
 */
export function instanceOfBTParameterVisibilityOnMateDOFType2114(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTParameterVisibilityOnMateDOFType2114FromJSON(json: any): BTParameterVisibilityOnMateDOFType2114 {
    return BTParameterVisibilityOnMateDOFType2114FromJSONTyped(json, false);
}

export function BTParameterVisibilityOnMateDOFType2114FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterVisibilityOnMateDOFType2114 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterVisibilityOnEqual180FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
    };
}

export function BTParameterVisibilityOnMateDOFType2114ToJSON(value?: BTParameterVisibilityOnMateDOFType2114 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterVisibilityOnEqual180ToJSON(value),
        'btType': value.btType,
    };
}

