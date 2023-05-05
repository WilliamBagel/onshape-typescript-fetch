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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTOnePartProperties230 } from './BTOnePartProperties230';
import {
    BTOnePartProperties230FromJSON,
    BTOnePartProperties230FromJSONTyped,
    BTOnePartProperties230ToJSON,
} from './BTOnePartProperties230';

/**
 * 
 * @export
 * @interface BTOneConfigurationPartProperties1661
 */
export interface BTOneConfigurationPartProperties1661 {
    /**
     * 
     * @type {string}
     * @memberof BTOneConfigurationPartProperties1661
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTOneConfigurationPartProperties1661
     */
    _configuration?: { [key: string]: BTFSValue1888; };
    /**
     * 
     * @type {BTOnePartProperties230}
     * @memberof BTOneConfigurationPartProperties1661
     */
    merged?: BTOnePartProperties230;
    /**
     * 
     * @type {string}
     * @memberof BTOneConfigurationPartProperties1661
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTOnePartProperties230>}
     * @memberof BTOneConfigurationPartProperties1661
     */
    properties?: Array<BTOnePartProperties230>;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTOneConfigurationPartProperties1661
     */
    propertyIds?: Set<string>;
}

/**
 * Check if a given object implements the BTOneConfigurationPartProperties1661 interface.
 */
export function instanceOfBTOneConfigurationPartProperties1661(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOneConfigurationPartProperties1661FromJSON(json: any): BTOneConfigurationPartProperties1661 {
    return BTOneConfigurationPartProperties1661FromJSONTyped(json, false);
}

export function BTOneConfigurationPartProperties1661FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOneConfigurationPartProperties1661 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : (mapValues(json['configuration'], BTFSValue1888FromJSON)),
        'merged': !exists(json, 'merged') ? undefined : BTOnePartProperties230FromJSON(json['merged']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTOnePartProperties230FromJSON)),
        'propertyIds': !exists(json, 'propertyIds') ? undefined : json['propertyIds'],
    };
}

export function BTOneConfigurationPartProperties1661ToJSON(value?: BTOneConfigurationPartProperties1661 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : (mapValues(value._configuration, BTFSValue1888ToJSON)),
        'merged': BTOnePartProperties230ToJSON(value.merged),
        'nodeId': value.nodeId,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTOnePartProperties230ToJSON)),
        'propertyIds': value.propertyIds === undefined ? undefined : Array.from(value.propertyIds as Set<any>),
    };
}

