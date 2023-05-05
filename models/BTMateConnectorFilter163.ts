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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTMateConnectorFilter163
 */
export interface BTMateConnectorFilter163 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorFilter163
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateConnectorFilter163
     */
    requiresOccurrence?: boolean;
}

/**
 * Check if a given object implements the BTMateConnectorFilter163 interface.
 */
export function instanceOfBTMateConnectorFilter163(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateConnectorFilter163FromJSON(json: any): BTMateConnectorFilter163 {
    return BTMateConnectorFilter163FromJSONTyped(json, false);
}

export function BTMateConnectorFilter163FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateConnectorFilter163 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'requiresOccurrence': !exists(json, 'requiresOccurrence') ? undefined : json['requiresOccurrence'],
    };
}

export function BTMateConnectorFilter163ToJSON(value?: BTMateConnectorFilter163 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183ToJSON(value),
        'btType': value.btType,
        'requiresOccurrence': value.requiresOccurrence,
    };
}

