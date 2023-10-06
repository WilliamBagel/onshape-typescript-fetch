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
import type { BTReleasePackageItemParams } from './BTReleasePackageItemParams';
import {
    BTReleasePackageItemParamsFromJSON,
    BTReleasePackageItemParamsFromJSONTyped,
    BTReleasePackageItemParamsToJSON,
} from './BTReleasePackageItemParams';

/**
 * 
 * @export
 * @interface BTReleasePackageParams
 */
export interface BTReleasePackageParams {
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageParams
     */
    changeOrderId?: string;
    /**
     * 
     * @type {Array<BTReleasePackageItemParams>}
     * @memberof BTReleasePackageParams
     */
    items?: Array<BTReleasePackageItemParams>;
}

/**
 * Check if a given object implements the BTReleasePackageParams interface.
 */
export function instanceOfBTReleasePackageParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTReleasePackageParamsFromJSON(json: any): BTReleasePackageParams {
    return BTReleasePackageParamsFromJSONTyped(json, false);
}

export function BTReleasePackageParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTReleasePackageParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeOrderId': !exists(json, 'changeOrderId') ? undefined : json['changeOrderId'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTReleasePackageItemParamsFromJSON)),
    };
}

export function BTReleasePackageParamsToJSON(value?: BTReleasePackageParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeOrderId': value.changeOrderId,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTReleasePackageItemParamsToJSON)),
    };
}

