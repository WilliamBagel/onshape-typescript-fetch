/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.176.31157-f17972084104
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTPStatementLoopForIn279AllOf
 */
export interface BTPStatementLoopForIn279AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    container?: BTPExpression9;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    identifiers?: Array<BTPIdentifier8>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    isVarDeclaredHere?: boolean;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    keyVar?: BTPIdentifier8;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    spaceBeforeVar?: BTPSpace10;
    /**
     * 
     * @type {Array<GBTPType>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    standardTypes?: Array<GBTPType>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    typeNames?: Array<string>;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    _var?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPStatementLoopForIn279AllOf interface.
 */
export function instanceOfBTPStatementLoopForIn279AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementLoopForIn279AllOfFromJSON(json: any): BTPStatementLoopForIn279AllOf {
    return BTPStatementLoopForIn279AllOfFromJSONTyped(json, false);
}

export function BTPStatementLoopForIn279AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementLoopForIn279AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'container': !exists(json, 'container') ? undefined : BTPExpression9FromJSON(json['container']),
        'identifiers': !exists(json, 'identifiers') ? undefined : ((json['identifiers'] as Array<any>).map(BTPIdentifier8FromJSON)),
        'isVarDeclaredHere': !exists(json, 'isVarDeclaredHere') ? undefined : json['isVarDeclaredHere'],
        'keyVar': !exists(json, 'keyVar') ? undefined : BTPIdentifier8FromJSON(json['keyVar']),
        'spaceBeforeVar': !exists(json, 'spaceBeforeVar') ? undefined : BTPSpace10FromJSON(json['spaceBeforeVar']),
        'standardTypes': !exists(json, 'standardTypes') ? undefined : ((json['standardTypes'] as Array<any>).map(GBTPTypeFromJSON)),
        'typeNames': !exists(json, 'typeNames') ? undefined : json['typeNames'],
        '_var': !exists(json, 'var') ? undefined : BTPIdentifier8FromJSON(json['var']),
    };
}

export function BTPStatementLoopForIn279AllOfToJSON(value?: BTPStatementLoopForIn279AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'container': BTPExpression9ToJSON(value.container),
        'identifiers': value.identifiers === undefined ? undefined : ((value.identifiers as Array<any>).map(BTPIdentifier8ToJSON)),
        'isVarDeclaredHere': value.isVarDeclaredHere,
        'keyVar': BTPIdentifier8ToJSON(value.keyVar),
        'spaceBeforeVar': BTPSpace10ToJSON(value.spaceBeforeVar),
        'standardTypes': value.standardTypes === undefined ? undefined : ((value.standardTypes as Array<any>).map(GBTPTypeToJSON)),
        'typeNames': value.typeNames,
        'var': BTPIdentifier8ToJSON(value._var),
    };
}

