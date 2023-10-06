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
import type { BTPLiteralMapEntry257 } from './BTPLiteralMapEntry257';
import {
    BTPLiteralMapEntry257FromJSON,
    BTPLiteralMapEntry257FromJSONTyped,
    BTPLiteralMapEntry257ToJSON,
} from './BTPLiteralMapEntry257';
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
 * @interface BTPLiteralMap256
 */
export interface BTPLiteralMap256 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralMap256
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralMap256
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPLiteralMap256
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPLiteralMap256
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {Array<BTPLiteralMapEntry257>}
     * @memberof BTPLiteralMap256
     */
    entries?: Array<BTPLiteralMapEntry257>;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralMap256
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralMap256
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLiteralMap256
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLiteralMap256
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralMap256
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLiteralMap256
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {number}
     * @memberof BTPLiteralMap256
     */
    startSourceLocation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralMap256
     */
    trailingComma?: boolean;
}

/**
 * Check if a given object implements the BTPLiteralMap256 interface.
 */
export function instanceOfBTPLiteralMap256(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteralMap256FromJSON(json: any): BTPLiteralMap256 {
    return BTPLiteralMap256FromJSONTyped(json, false);
}

export function BTPLiteralMap256FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteralMap256 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTPLiteralMapEntry257FromJSON)),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
        'trailingComma': !exists(json, 'trailingComma') ? undefined : json['trailingComma'],
    };
}

export function BTPLiteralMap256ToJSON(value?: BTPLiteralMap256 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTPLiteralMapEntry257ToJSON)),
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'startSourceLocation': value.startSourceLocation,
        'trailingComma': value.trailingComma,
    };
}

