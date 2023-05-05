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
import type { BTMConfiguredValue1341 } from './BTMConfiguredValue1341';
import {
    BTMConfiguredValue1341FromJSON,
    BTMConfiguredValue1341FromJSONTyped,
    BTMConfiguredValue1341ToJSON,
} from './BTMConfiguredValue1341';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMConfiguredValueByBoolean1501
 */
export interface BTMConfiguredValueByBoolean1501 extends BTMConfiguredValue1341 {
    /**
     * 
     * @type {string}
     * @memberof BTMConfiguredValueByBoolean1501
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMConfiguredValueByBoolean1501
     */
    booleanValue?: boolean;
}

/**
 * Check if a given object implements the BTMConfiguredValueByBoolean1501 interface.
 */
export function instanceOfBTMConfiguredValueByBoolean1501(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfiguredValueByBoolean1501FromJSON(json: any): BTMConfiguredValueByBoolean1501 {
    return BTMConfiguredValueByBoolean1501FromJSONTyped(json, false);
}

export function BTMConfiguredValueByBoolean1501FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfiguredValueByBoolean1501 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMConfiguredValue1341FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'booleanValue': !exists(json, 'booleanValue') ? undefined : json['booleanValue'],
    };
}

export function BTMConfiguredValueByBoolean1501ToJSON(value?: BTMConfiguredValueByBoolean1501 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMConfiguredValue1341ToJSON(value),
        'btType': value.btType,
        'booleanValue': value.booleanValue,
    };
}

