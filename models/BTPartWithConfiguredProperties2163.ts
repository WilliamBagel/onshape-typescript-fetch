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
import type { BTOneConfigurationPartProperties1661 } from './BTOneConfigurationPartProperties1661';
import {
    BTOneConfigurationPartProperties1661FromJSON,
    BTOneConfigurationPartProperties1661FromJSONTyped,
    BTOneConfigurationPartProperties1661ToJSON,
} from './BTOneConfigurationPartProperties1661';
import type { BTPFunctionDeclaration246 } from './BTPFunctionDeclaration246';
import {
    BTPFunctionDeclaration246FromJSON,
    BTPFunctionDeclaration246FromJSONTyped,
    BTPFunctionDeclaration246ToJSON,
} from './BTPFunctionDeclaration246';

/**
 * 
 * @export
 * @interface BTPartWithConfiguredProperties2163
 */
export interface BTPartWithConfiguredProperties2163 {
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTOneConfigurationPartProperties1661>}
     * @memberof BTPartWithConfiguredProperties2163
     */
    configurationProperties?: Array<BTOneConfigurationPartProperties1661>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartWithConfiguredProperties2163
     */
    forSubPartProperties?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPFunctionDeclaration246}
     * @memberof BTPartWithConfiguredProperties2163
     */
    parsedQuery?: BTPFunctionDeclaration246;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    propertyNodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    query?: string;
}

/**
 * Check if a given object implements the BTPartWithConfiguredProperties2163 interface.
 */
export function instanceOfBTPartWithConfiguredProperties2163(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartWithConfiguredProperties2163FromJSON(json: any): BTPartWithConfiguredProperties2163 {
    return BTPartWithConfiguredProperties2163FromJSONTyped(json, false);
}

export function BTPartWithConfiguredProperties2163FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartWithConfiguredProperties2163 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configurationProperties': !exists(json, 'configurationProperties') ? undefined : ((json['configurationProperties'] as Array<any>).map(BTOneConfigurationPartProperties1661FromJSON)),
        'forSubPartProperties': !exists(json, 'forSubPartProperties') ? undefined : json['forSubPartProperties'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parsedQuery': !exists(json, 'parsedQuery') ? undefined : BTPFunctionDeclaration246FromJSON(json['parsedQuery']),
        'propertyNodeId': !exists(json, 'propertyNodeId') ? undefined : json['propertyNodeId'],
        'query': !exists(json, 'query') ? undefined : json['query'],
    };
}

export function BTPartWithConfiguredProperties2163ToJSON(value?: BTPartWithConfiguredProperties2163 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configurationProperties': value.configurationProperties === undefined ? undefined : ((value.configurationProperties as Array<any>).map(BTOneConfigurationPartProperties1661ToJSON)),
        'forSubPartProperties': value.forSubPartProperties,
        'nodeId': value.nodeId,
        'parsedQuery': BTPFunctionDeclaration246ToJSON(value.parsedQuery),
        'propertyNodeId': value.propertyNodeId,
        'query': value.query,
    };
}

