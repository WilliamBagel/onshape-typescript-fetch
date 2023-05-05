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
import type { BTPLiteral253 } from './BTPLiteral253';
import {
    BTPLiteral253FromJSON,
    BTPLiteral253FromJSONTyped,
    BTPLiteral253ToJSON,
} from './BTPLiteral253';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPLiteralArray254
 */
export interface BTPLiteralArray254 extends BTPLiteral253 {
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralArray254
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLiteralArray254
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralArray254
     */
    trailingComma?: boolean;
}

/**
 * Check if a given object implements the BTPLiteralArray254 interface.
 */
export function instanceOfBTPLiteralArray254(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteralArray254FromJSON(json: any): BTPLiteralArray254 {
    return BTPLiteralArray254FromJSONTyped(json, false);
}

export function BTPLiteralArray254FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteralArray254 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPLiteral253FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'trailingComma': !exists(json, 'trailingComma') ? undefined : json['trailingComma'],
    };
}

export function BTPLiteralArray254ToJSON(value?: BTPLiteralArray254 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPLiteral253ToJSON(value),
        'btType': value.btType,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'trailingComma': value.trailingComma,
    };
}

