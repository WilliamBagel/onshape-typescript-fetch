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
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPTypeNameUser292
 */
export interface BTPTypeNameUser292 extends BTPTypeName290 {
    /**
     * 
     * @type {string}
     * @memberof BTPTypeNameUser292
     */
    btType?: string;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPTypeNameUser292
     */
    type?: BTPName261;
}

/**
 * Check if a given object implements the BTPTypeNameUser292 interface.
 */
export function instanceOfBTPTypeNameUser292(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTypeNameUser292FromJSON(json: any): BTPTypeNameUser292 {
    return BTPTypeNameUser292FromJSONTyped(json, false);
}

export function BTPTypeNameUser292FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTypeNameUser292 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPTypeName290FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'type': !exists(json, 'type') ? undefined : BTPName261FromJSON(json['type']),
    };
}

export function BTPTypeNameUser292ToJSON(value?: BTPTypeNameUser292 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPTypeName290ToJSON(value),
        'btType': value.btType,
        'type': BTPName261ToJSON(value.type),
    };
}

