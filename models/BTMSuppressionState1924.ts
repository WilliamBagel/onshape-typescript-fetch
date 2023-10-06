/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.170.23367-59c3c9f9feef
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
 BTMNode19SuperToJSON,
} from './BTMNode19';

import {
     BTMSuppressionStateConfigured2598FromJSONTyped,
    BTMSuppressionStateConfigured2598ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMSuppressionState1924
 */
export interface BTMSuppressionState1924 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMSuppressionState1924
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMSuppressionState1924 interface.
 */
export function instanceOfBTMSuppressionState1924(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSuppressionState1924FromJSON(json: any): BTMSuppressionState1924 {
    return BTMSuppressionState1924FromJSONTyped(json, false);
}

export function BTMSuppressionState1924FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSuppressionState1924 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMSuppressionStateConfigured-2598') {
            return BTMSuppressionStateConfigured2598FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMSuppressionState1924SuperToJSON(value?: BTMSuppressionState1924 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19SuperToJSON(value),
        'btType': value.btType,
    };
}



export function BTMSuppressionState1924ToJSON(value?: BTMSuppressionState1924 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMSuppressionStateConfigured-2598') {
        return BTMSuppressionStateConfigured2598ToJSON(value);
    }
    return BTMSuppressionState1924SuperToJSON(value);
}
