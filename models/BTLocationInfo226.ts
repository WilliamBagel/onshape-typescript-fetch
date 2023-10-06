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
import type { BTDocumentVersionElementIds1897 } from './BTDocumentVersionElementIds1897';
import {
    BTDocumentVersionElementIds1897FromJSON,
    BTDocumentVersionElementIds1897FromJSONTyped,
    BTDocumentVersionElementIds1897ToJSON,
} from './BTDocumentVersionElementIds1897';
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';
import type { BTPNode7 } from './BTPNode7';
import {
    BTPNode7FromJSON,
    BTPNode7FromJSONTyped,
    BTPNode7ToJSON,
} from './BTPNode7';

/**
 * 
 * @export
 * @interface BTLocationInfo226
 */
export interface BTLocationInfo226 {
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    character?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    column?: number;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    document?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    elementMicroversion?: string;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    endCharacter?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    endColumn?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    endLine?: number;
    /**
     * 
     * @type {BTPNode7}
     * @memberof BTLocationInfo226
     */
    fromNode?: BTPNode7;
    /**
     * 
     * @type {BTLocationInfo226}
     * @memberof BTLocationInfo226
     */
    fromTemplate?: BTLocationInfo226;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    languageVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLocationInfo226
     */
    line?: number;
    /**
     * 
     * @type {BTDocumentVersionElementIds1897}
     * @memberof BTLocationInfo226
     */
    moduleIds?: BTDocumentVersionElementIds1897;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    parseNodeId?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTLocationInfo226
     */
    parseNodeIdRaw?: BTObjectId;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    topLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLocationInfo226
     */
    version?: string;
}

/**
 * Check if a given object implements the BTLocationInfo226 interface.
 */
export function instanceOfBTLocationInfo226(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLocationInfo226FromJSON(json: any): BTLocationInfo226 {
    return BTLocationInfo226FromJSONTyped(json, false);
}

export function BTLocationInfo226FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLocationInfo226 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'character': !exists(json, 'character') ? undefined : json['character'],
        'column': !exists(json, 'column') ? undefined : json['column'],
        'document': !exists(json, 'document') ? undefined : json['document'],
        'elementMicroversion': !exists(json, 'elementMicroversion') ? undefined : json['elementMicroversion'],
        'endCharacter': !exists(json, 'endCharacter') ? undefined : json['endCharacter'],
        'endColumn': !exists(json, 'endColumn') ? undefined : json['endColumn'],
        'endLine': !exists(json, 'endLine') ? undefined : json['endLine'],
        'fromNode': !exists(json, 'fromNode') ? undefined : BTPNode7FromJSON(json['fromNode']),
        'fromTemplate': !exists(json, 'fromTemplate') ? undefined : BTLocationInfo226FromJSON(json['fromTemplate']),
        'languageVersion': !exists(json, 'languageVersion') ? undefined : json['languageVersion'],
        'line': !exists(json, 'line') ? undefined : json['line'],
        'moduleIds': !exists(json, 'moduleIds') ? undefined : BTDocumentVersionElementIds1897FromJSON(json['moduleIds']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parseNodeId': !exists(json, 'parseNodeId') ? undefined : json['parseNodeId'],
        'parseNodeIdRaw': !exists(json, 'parseNodeIdRaw') ? undefined : BTObjectIdFromJSON(json['parseNodeIdRaw']),
        'topLevel': !exists(json, 'topLevel') ? undefined : json['topLevel'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BTLocationInfo226ToJSON(value?: BTLocationInfo226 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'character': value.character,
        'column': value.column,
        'document': value.document,
        'elementMicroversion': value.elementMicroversion,
        'endCharacter': value.endCharacter,
        'endColumn': value.endColumn,
        'endLine': value.endLine,
        'fromNode': BTPNode7ToJSON(value.fromNode),
        'fromTemplate': BTLocationInfo226ToJSON(value.fromTemplate),
        'languageVersion': value.languageVersion,
        'line': value.line,
        'moduleIds': BTDocumentVersionElementIds1897ToJSON(value.moduleIds),
        'nodeId': value.nodeId,
        'parseNodeId': value.parseNodeId,
        'parseNodeIdRaw': BTObjectIdToJSON(value.parseNodeIdRaw),
        'topLevel': value.topLevel,
        'version': value.version,
    };
}

