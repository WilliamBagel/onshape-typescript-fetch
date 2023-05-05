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
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
} from './BTDomainSpecificMetadata961';
import type { GBTEntityType } from './GBTEntityType';
import {
    GBTEntityTypeFromJSON,
    GBTEntityTypeFromJSONTyped,
    GBTEntityTypeToJSON,
} from './GBTEntityType';

/**
 * 
 * @export
 * @interface BTSMSpecificMetadata1315
 */
export interface BTSMSpecificMetadata1315 extends BTDomainSpecificMetadata961 {
    /**
     * 
     * @type {string}
     * @memberof BTSMSpecificMetadata1315
     */
    btType?: string;
    /**
     * 
     * @type {GBTEntityType}
     * @memberof BTSMSpecificMetadata1315
     */
    definitionEntityType?: GBTEntityType;
}

/**
 * Check if a given object implements the BTSMSpecificMetadata1315 interface.
 */
export function instanceOfBTSMSpecificMetadata1315(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSMSpecificMetadata1315FromJSON(json: any): BTSMSpecificMetadata1315 {
    return BTSMSpecificMetadata1315FromJSONTyped(json, false);
}

export function BTSMSpecificMetadata1315FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSMSpecificMetadata1315 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDomainSpecificMetadata961FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'definitionEntityType': !exists(json, 'definitionEntityType') ? undefined : GBTEntityTypeFromJSON(json['definitionEntityType']),
    };
}

export function BTSMSpecificMetadata1315ToJSON(value?: BTSMSpecificMetadata1315 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDomainSpecificMetadata961ToJSON(value),
        'btType': value.btType,
        'definitionEntityType': GBTEntityTypeToJSON(value.definitionEntityType),
    };
}

