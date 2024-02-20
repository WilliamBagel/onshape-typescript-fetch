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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
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
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
 BTPStatement269SuperToJSON,
} from './BTPStatement269';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTPStatementConstantDeclaration273
 */
export interface BTPStatementConstantDeclaration273 extends BTPStatement269 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementConstantDeclaration273
     */
    btType?: string;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementConstantDeclaration273
     */
    identifier?: BTPIdentifier8;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementConstantDeclaration273
     */
    name?: BTPIdentifier8;
    /**
     * 
     * @type {GBTPType}
     * @memberof BTPStatementConstantDeclaration273
     */
    standardType?: GBTPType;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPStatementConstantDeclaration273
     */
    type?: BTPTypeName290;
    /**
     * 
     * @type {string}
     * @memberof BTPStatementConstantDeclaration273
     */
    typeName?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementConstantDeclaration273
     */
    value?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementConstantDeclaration273 interface.
 */
export function instanceOfBTPStatementConstantDeclaration273(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementConstantDeclaration273FromJSON(json: any): BTPStatementConstantDeclaration273 {
    return BTPStatementConstantDeclaration273FromJSONTyped(json, false);
}

export function BTPStatementConstantDeclaration273FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementConstantDeclaration273 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'identifier': !exists(json, 'identifier') ? undefined : BTPIdentifier8FromJSON(json['identifier']),
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
        'standardType': !exists(json, 'standardType') ? undefined : GBTPTypeFromJSON(json['standardType']),
        'type': !exists(json, 'type') ? undefined : BTPTypeName290FromJSON(json['type']),
        'typeName': !exists(json, 'typeName') ? undefined : json['typeName'],
        'value': !exists(json, 'value') ? undefined : BTPExpression9FromJSON(json['value']),
    };
}

export function BTPStatementConstantDeclaration273ToJSON(value?: BTPStatementConstantDeclaration273 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269SuperToJSON(value),
        'btType': value.btType,
        'identifier': BTPIdentifier8ToJSON(value.identifier),
        'name': BTPIdentifier8ToJSON(value.name),
        'standardType': GBTPTypeToJSON(value.standardType),
        'type': BTPTypeName290ToJSON(value.type),
        'typeName': value.typeName,
        'value': BTPExpression9ToJSON(value.value),
    };
}

