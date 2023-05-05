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
import type { BTImport } from './BTImport';
import {
    BTImportFromJSON,
    BTImportFromJSONTyped,
    BTImportToJSON,
} from './BTImport';
import type { BTLazilyParsedFeatureScript } from './BTLazilyParsedFeatureScript';
import {
    BTLazilyParsedFeatureScriptFromJSON,
    BTLazilyParsedFeatureScriptFromJSONTyped,
    BTLazilyParsedFeatureScriptToJSON,
} from './BTLazilyParsedFeatureScript';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPNode7 } from './BTPNode7';
import {
    BTPNode7FromJSON,
    BTPNode7FromJSONTyped,
    BTPNode7ToJSON,
} from './BTPNode7';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPTopLevelImport285 } from './BTPTopLevelImport285';
import {
    BTPTopLevelImport285FromJSON,
    BTPTopLevelImport285FromJSONTyped,
    BTPTopLevelImport285ToJSON,
} from './BTPTopLevelImport285';
import type { BTPTopLevelNode286 } from './BTPTopLevelNode286';
import {
    BTPTopLevelNode286FromJSON,
    BTPTopLevelNode286FromJSONTyped,
    BTPTopLevelNode286ToJSON,
} from './BTPTopLevelNode286';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPModule234
 */
export interface BTPModule234 extends BTPNode7 {
    /**
     * 
     * @type {string}
     * @memberof BTPModule234
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: Array<BTImport>; }}
     * @memberof BTPModule234
     */
    deepImports?: { [key: string]: Array<BTImport>; };
    /**
     * 
     * @type {Array<BTPTopLevelImport285>}
     * @memberof BTPModule234
     */
    imports?: Array<BTPTopLevelImport285>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234
     */
    isBlob?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234
     */
    isInternalModule?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234
     */
    mayHaveImplicitImports?: boolean;
    /**
     * 
     * @type {{ [key: string]: BTMicroversionId366; }}
     * @memberof BTPModule234
     */
    pathMap?: { [key: string]: BTMicroversionId366; };
    /**
     * 
     * @type {BTLazilyParsedFeatureScript}
     * @memberof BTPModule234
     */
    toBeParsed?: BTLazilyParsedFeatureScript;
    /**
     * 
     * @type {Array<BTPTopLevelNode286>}
     * @memberof BTPModule234
     */
    topLevel?: Array<BTPTopLevelNode286>;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPModule234
     */
    version?: BTPLiteralNumber258;
    /**
     * 
     * @type {number}
     * @memberof BTPModule234
     */
    versionNumber?: number;
}

/**
 * Check if a given object implements the BTPModule234 interface.
 */
export function instanceOfBTPModule234(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPModule234FromJSON(json: any): BTPModule234 {
    return BTPModule234FromJSONTyped(json, false);
}

export function BTPModule234FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPModule234 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPNode7FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deepImports': !exists(json, 'deepImports') ? undefined : json['deepImports'],
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTPTopLevelImport285FromJSON)),
        'isBlob': !exists(json, 'isBlob') ? undefined : json['isBlob'],
        'isInternalModule': !exists(json, 'isInternalModule') ? undefined : json['isInternalModule'],
        'mayHaveImplicitImports': !exists(json, 'mayHaveImplicitImports') ? undefined : json['mayHaveImplicitImports'],
        'pathMap': !exists(json, 'pathMap') ? undefined : (mapValues(json['pathMap'], BTMicroversionId366FromJSON)),
        'toBeParsed': !exists(json, 'toBeParsed') ? undefined : BTLazilyParsedFeatureScriptFromJSON(json['toBeParsed']),
        'topLevel': !exists(json, 'topLevel') ? undefined : ((json['topLevel'] as Array<any>).map(BTPTopLevelNode286FromJSON)),
        'version': !exists(json, 'version') ? undefined : BTPLiteralNumber258FromJSON(json['version']),
        'versionNumber': !exists(json, 'versionNumber') ? undefined : json['versionNumber'],
    };
}

export function BTPModule234ToJSON(value?: BTPModule234 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPNode7ToJSON(value),
        'btType': value.btType,
        'deepImports': value.deepImports,
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTPTopLevelImport285ToJSON)),
        'isBlob': value.isBlob,
        'isInternalModule': value.isInternalModule,
        'mayHaveImplicitImports': value.mayHaveImplicitImports,
        'pathMap': value.pathMap === undefined ? undefined : (mapValues(value.pathMap, BTMicroversionId366ToJSON)),
        'toBeParsed': BTLazilyParsedFeatureScriptToJSON(value.toBeParsed),
        'topLevel': value.topLevel === undefined ? undefined : ((value.topLevel as Array<any>).map(BTPTopLevelNode286ToJSON)),
        'version': BTPLiteralNumber258ToJSON(value.version),
        'versionNumber': value.versionNumber,
    };
}

