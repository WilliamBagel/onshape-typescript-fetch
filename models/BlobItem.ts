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
import type { BTApplicationTargetInfo } from './BTApplicationTargetInfo';
import {
    BTApplicationTargetInfoFromJSON,
    BTApplicationTargetInfoFromJSONTyped,
    BTApplicationTargetInfoToJSON,
} from './BTApplicationTargetInfo';
import type { GBTElementType } from './GBTElementType';
import {
    GBTElementTypeFromJSON,
    GBTElementTypeFromJSONTyped,
    GBTElementTypeToJSON,
} from './GBTElementType';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
 ItemSuperToJSON,
} from './Item';

/**
 * 
 * @export
 * @interface BlobItem
 */
export interface BlobItem extends Item {
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    dataTypeForResponse?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    foreignDataId?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    prettyType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BlobItem
     */
    safeToShow?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BlobItem
     */
    specifiedUnit?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BlobItem
     */
    unupdatable?: boolean;
}

/**
 * Check if a given object implements the BlobItem interface.
 */
export function instanceOfBlobItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlobItemFromJSON(json: any): BlobItem {
    return BlobItemFromJSONTyped(json, false);
}

export function BlobItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlobItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ItemFromJSONTyped(json, ignoreDiscriminator),
        'dataTypeForResponse': !exists(json, 'dataTypeForResponse') ? undefined : json['dataTypeForResponse'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'foreignDataId': !exists(json, 'foreignDataId') ? undefined : json['foreignDataId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'prettyType': !exists(json, 'prettyType') ? undefined : json['prettyType'],
        'safeToShow': !exists(json, 'safeToShow') ? undefined : json['safeToShow'],
        'specifiedUnit': !exists(json, 'specifiedUnit') ? undefined : json['specifiedUnit'],
        'unupdatable': !exists(json, 'unupdatable') ? undefined : json['unupdatable'],
    };
}

export function BlobItemToJSON(value?: BlobItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ItemSuperToJSON(value),
        'dataTypeForResponse': value.dataTypeForResponse,
        'filename': value.filename,
        'foreignDataId': value.foreignDataId,
        'href': value.href,
        'prettyType': value.prettyType,
        'safeToShow': value.safeToShow,
        'specifiedUnit': value.specifiedUnit,
        'unupdatable': value.unupdatable,
    };
}

