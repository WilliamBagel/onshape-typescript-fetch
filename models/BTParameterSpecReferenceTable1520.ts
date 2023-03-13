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
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpecReferenceBlob1367 } from './BTParameterSpecReferenceBlob1367';
import {
    BTParameterSpecReferenceBlob1367FromJSON,
    BTParameterSpecReferenceBlob1367FromJSONTyped,
    BTParameterSpecReferenceBlob1367ToJSON,
} from './BTParameterSpecReferenceBlob1367';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceTable1520
 */
export interface BTParameterSpecReferenceTable1520 extends BTParameterSpecReferenceBlob1367 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceTable1520
     */
    btType?: string;
}



/**
 * Check if a given object implements the BTParameterSpecReferenceTable1520 interface.
 */
export function instanceOfBTParameterSpecReferenceTable1520(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceTable1520FromJSON(json: any): BTParameterSpecReferenceTable1520 {
    return BTParameterSpecReferenceTable1520FromJSONTyped(json, false);
}

export function BTParameterSpecReferenceTable1520FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceTable1520 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpecReferenceBlob1367FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParameterSpecReferenceTable1520ToJSON(value?: BTParameterSpecReferenceTable1520 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReferenceBlob1367ToJSON(value),
        'btType': value.btType,
    };
}
