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
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPModuleId235 } from './BTPModuleId235';
import {
    BTPModuleId235FromJSON,
    BTPModuleId235FromJSONTyped,
    BTPModuleId235ToJSON,
} from './BTPModuleId235';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPTopLevelImport285AllOf
 */
export interface BTPTopLevelImport285AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelImport285AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelImport285AllOf
     */
    combinedNamespacePathAndVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelImport285AllOf
     */
    importMicroversion?: string;
    /**
     * 
     * @type {BTPModuleId235}
     * @memberof BTPTopLevelImport285AllOf
     */
    moduleId?: BTPModuleId235;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPTopLevelImport285AllOf
     */
    namespace?: Array<BTPIdentifier8>;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelImport285AllOf
     */
    namespaceString?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelImport285AllOf
     */
    spaceBeforeImport?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPTopLevelImport285AllOf interface.
 */
export function instanceOfBTPTopLevelImport285AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelImport285AllOfFromJSON(json: any): BTPTopLevelImport285AllOf {
    return BTPTopLevelImport285AllOfFromJSONTyped(json, false);
}

export function BTPTopLevelImport285AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelImport285AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'combinedNamespacePathAndVersion': !exists(json, 'combinedNamespacePathAndVersion') ? undefined : json['combinedNamespacePathAndVersion'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'moduleId': !exists(json, 'moduleId') ? undefined : BTPModuleId235FromJSON(json['moduleId']),
        'namespace': !exists(json, 'namespace') ? undefined : ((json['namespace'] as Array<any>).map(BTPIdentifier8FromJSON)),
        'namespaceString': !exists(json, 'namespaceString') ? undefined : json['namespaceString'],
        'spaceBeforeImport': !exists(json, 'spaceBeforeImport') ? undefined : BTPSpace10FromJSON(json['spaceBeforeImport']),
    };
}

export function BTPTopLevelImport285AllOfToJSON(value?: BTPTopLevelImport285AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'combinedNamespacePathAndVersion': value.combinedNamespacePathAndVersion,
        'importMicroversion': value.importMicroversion,
        'moduleId': BTPModuleId235ToJSON(value.moduleId),
        'namespace': value.namespace === undefined ? undefined : ((value.namespace as Array<any>).map(BTPIdentifier8ToJSON)),
        'namespaceString': value.namespaceString,
        'spaceBeforeImport': BTPSpace10ToJSON(value.spaceBeforeImport),
    };
}

