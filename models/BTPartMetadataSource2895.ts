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
import type { GBTMetadataSourceType } from './GBTMetadataSourceType';
import {
    GBTMetadataSourceTypeFromJSON,
    GBTMetadataSourceTypeFromJSONTyped,
    GBTMetadataSourceTypeToJSON,
} from './GBTMetadataSourceType';

/**
 * 
 * @export
 * @interface BTPartMetadataSource2895
 */
export interface BTPartMetadataSource2895 {
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataSource2895
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataSource2895
     */
    sourceId?: string;
    /**
     * 
     * @type {GBTMetadataSourceType}
     * @memberof BTPartMetadataSource2895
     */
    sourceType?: GBTMetadataSourceType;
}

/**
 * Check if a given object implements the BTPartMetadataSource2895 interface.
 */
export function instanceOfBTPartMetadataSource2895(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartMetadataSource2895FromJSON(json: any): BTPartMetadataSource2895 {
    return BTPartMetadataSource2895FromJSONTyped(json, false);
}

export function BTPartMetadataSource2895FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartMetadataSource2895 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'sourceType': !exists(json, 'sourceType') ? undefined : GBTMetadataSourceTypeFromJSON(json['sourceType']),
    };
}

export function BTPartMetadataSource2895ToJSON(value?: BTPartMetadataSource2895 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'sourceId': value.sourceId,
        'sourceType': GBTMetadataSourceTypeToJSON(value.sourceType),
    };
}

