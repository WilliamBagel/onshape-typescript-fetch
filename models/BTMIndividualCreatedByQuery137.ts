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
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
} from './BTMIndividualQuery138';
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';
import type { GBTBodyType } from './GBTBodyType';
import {
    GBTBodyTypeFromJSON,
    GBTBodyTypeFromJSONTyped,
    GBTBodyTypeToJSON,
} from './GBTBodyType';
import type { GBTEntityType } from './GBTEntityType';
import {
    GBTEntityTypeFromJSON,
    GBTEntityTypeFromJSONTyped,
    GBTEntityTypeToJSON,
} from './GBTEntityType';

/**
 * 
 * @export
 * @interface BTMIndividualCreatedByQuery137
 */
export interface BTMIndividualCreatedByQuery137 extends BTMIndividualQuery138 {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualCreatedByQuery137
     */
    btType?: string;
    /**
     * 
     * @type {GBTBodyType}
     * @memberof BTMIndividualCreatedByQuery137
     */
    bodyType?: GBTBodyType;
    /**
     * 
     * @type {GBTEntityType}
     * @memberof BTMIndividualCreatedByQuery137
     */
    entityType?: GBTEntityType;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualCreatedByQuery137
     */
    featureId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMIndividualCreatedByQuery137
     */
    filterConstruction?: boolean;
}

/**
 * Check if a given object implements the BTMIndividualCreatedByQuery137 interface.
 */
export function instanceOfBTMIndividualCreatedByQuery137(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualCreatedByQuery137FromJSON(json: any): BTMIndividualCreatedByQuery137 {
    return BTMIndividualCreatedByQuery137FromJSONTyped(json, false);
}

export function BTMIndividualCreatedByQuery137FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualCreatedByQuery137 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMIndividualQuery138FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'bodyType': !exists(json, 'bodyType') ? undefined : GBTBodyTypeFromJSON(json['bodyType']),
        'entityType': !exists(json, 'entityType') ? undefined : GBTEntityTypeFromJSON(json['entityType']),
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'filterConstruction': !exists(json, 'filterConstruction') ? undefined : json['filterConstruction'],
    };
}

export function BTMIndividualCreatedByQuery137ToJSON(value?: BTMIndividualCreatedByQuery137 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQuery138ToJSON(value),
        'btType': value.btType,
        'bodyType': GBTBodyTypeToJSON(value.bodyType),
        'entityType': GBTEntityTypeToJSON(value.entityType),
        'featureId': value.featureId,
        'filterConstruction': value.filterConstruction,
    };
}

