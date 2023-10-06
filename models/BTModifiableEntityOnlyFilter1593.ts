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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTModifiableEntityOnlyFilter1593
 */
export interface BTModifiableEntityOnlyFilter1593 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTModifiableEntityOnlyFilter1593
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTModifiableEntityOnlyFilter1593
     */
    modifiableOnly?: boolean;
}

/**
 * Check if a given object implements the BTModifiableEntityOnlyFilter1593 interface.
 */
export function instanceOfBTModifiableEntityOnlyFilter1593(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTModifiableEntityOnlyFilter1593FromJSON(json: any): BTModifiableEntityOnlyFilter1593 {
    return BTModifiableEntityOnlyFilter1593FromJSONTyped(json, false);
}

export function BTModifiableEntityOnlyFilter1593FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTModifiableEntityOnlyFilter1593 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'modifiableOnly': !exists(json, 'modifiableOnly') ? undefined : json['modifiableOnly'],
    };
}

export function BTModifiableEntityOnlyFilter1593ToJSON(value?: BTModifiableEntityOnlyFilter1593 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'modifiableOnly': value.modifiableOnly,
    };
}

