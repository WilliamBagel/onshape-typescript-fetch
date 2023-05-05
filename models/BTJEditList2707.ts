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
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
} from './BTJEdit3734';

/**
 * A list of edits that will be applied in order.
 * @export
 * @interface BTJEditList2707
 */
export interface BTJEditList2707 extends BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEditList2707
     */
    btType: string;
    /**
     * 
     * @type {Array<BTJEdit3734>}
     * @memberof BTJEditList2707
     */
    edits?: Array<BTJEdit3734>;
}

/**
 * Check if a given object implements the BTJEditList2707 interface.
 */
export function instanceOfBTJEditList2707(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTJEditList2707FromJSON(json: any): BTJEditList2707 {
    return BTJEditList2707FromJSONTyped(json, false);
}

export function BTJEditList2707FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditList2707 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJEdit3734FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'edits': !exists(json, 'edits') ? undefined : ((json['edits'] as Array<any>).map(BTJEdit3734FromJSON)),
    };
}

export function BTJEditList2707ToJSON(value?: BTJEditList2707 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJEdit3734ToJSON(value),
        'btType': value.btType,
        'edits': value.edits === undefined ? undefined : ((value.edits as Array<any>).map(BTJEdit3734ToJSON)),
    };
}

