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
import type { BTTableCell1114 } from './BTTableCell1114';
import {
    BTTableCell1114FromJSON,
    BTTableCell1114FromJSONTyped,
    BTTableCell1114ToJSON,
} from './BTTableCell1114';

/**
 * 
 * @export
 * @interface BTTableTestCellString2112
 */
export interface BTTableTestCellString2112 extends BTTableCell1114 {
    /**
     * 
     * @type {string}
     * @memberof BTTableTestCellString2112
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableTestCellString2112
     */
    cellValue?: string;
}

/**
 * Check if a given object implements the BTTableTestCellString2112 interface.
 */
export function instanceOfBTTableTestCellString2112(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableTestCellString2112FromJSON(json: any): BTTableTestCellString2112 {
    return BTTableTestCellString2112FromJSONTyped(json, false);
}

export function BTTableTestCellString2112FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableTestCellString2112 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableCell1114FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cellValue': !exists(json, 'cellValue') ? undefined : json['cellValue'],
    };
}

export function BTTableTestCellString2112ToJSON(value?: BTTableTestCellString2112 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableCell1114ToJSON(value),
        'btType': value.btType,
        'cellValue': value.cellValue,
    };
}

