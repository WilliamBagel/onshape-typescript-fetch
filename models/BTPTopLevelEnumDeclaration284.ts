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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPTopLevelTypeDeclaration287 } from './BTPTopLevelTypeDeclaration287';
import {
    BTPTopLevelTypeDeclaration287FromJSON,
    BTPTopLevelTypeDeclaration287FromJSONTyped,
    BTPTopLevelTypeDeclaration287ToJSON,
 BTPTopLevelTypeDeclaration287SuperToJSON,
} from './BTPTopLevelTypeDeclaration287';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPTopLevelEnumDeclaration284
 */
export interface BTPTopLevelEnumDeclaration284 extends BTPTopLevelTypeDeclaration287 {
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelEnumDeclaration284
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTPAnnotation231>}
     * @memberof BTPTopLevelEnumDeclaration284
     */
    annotations?: Array<BTPAnnotation231>;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelEnumDeclaration284
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelEnumDeclaration284
     */
    trailingComma?: boolean;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPTopLevelEnumDeclaration284
     */
    values?: Array<BTPIdentifier8>;
}

/**
 * Check if a given object implements the BTPTopLevelEnumDeclaration284 interface.
 */
export function instanceOfBTPTopLevelEnumDeclaration284(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelEnumDeclaration284FromJSON(json: any): BTPTopLevelEnumDeclaration284 {
    return BTPTopLevelEnumDeclaration284FromJSONTyped(json, false);
}

export function BTPTopLevelEnumDeclaration284FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelEnumDeclaration284 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPTopLevelTypeDeclaration287FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(BTPAnnotation231FromJSON)),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'trailingComma': !exists(json, 'trailingComma') ? undefined : json['trailingComma'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(BTPIdentifier8FromJSON)),
    };
}

export function BTPTopLevelEnumDeclaration284ToJSON(value?: BTPTopLevelEnumDeclaration284 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPTopLevelTypeDeclaration287SuperToJSON(value),
        'btType': value.btType,
        'annotations': value.annotations === undefined ? undefined : ((value.annotations as Array<any>).map(BTPAnnotation231ToJSON)),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'trailingComma': value.trailingComma,
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(BTPIdentifier8ToJSON)),
    };
}

