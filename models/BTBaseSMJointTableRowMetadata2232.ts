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
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
 BTTableBaseRowMetadata3181SuperToJSON,
} from './BTTableBaseRowMetadata3181';
import type { BTTableCrossHighlightData1753 } from './BTTableCrossHighlightData1753';
import {
    BTTableCrossHighlightData1753FromJSON,
    BTTableCrossHighlightData1753FromJSONTyped,
    BTTableCrossHighlightData1753ToJSON,
} from './BTTableCrossHighlightData1753';

import {
     BTSMBendTableRowMetadata1705FromJSONTyped,
    BTSMBendTableRowMetadata1705ToJSON,
     BTSMOtherJointTableRowMetadata2640FromJSONTyped,
    BTSMOtherJointTableRowMetadata2640ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTBaseSMJointTableRowMetadata2232
 */
export interface BTBaseSMJointTableRowMetadata2232 extends BTTableBaseRowMetadata3181 {
    /**
     * 
     * @type {string}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    btType?: string;
    /**
     * 
     * @type {BTTableCrossHighlightData1753}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    crossHighlightData?: BTTableCrossHighlightData1753;
    /**
     * 
     * @type {BTTableCrossHighlightData1753}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    crossHighlightDataIfAny?: BTTableCrossHighlightData1753;
}

/**
 * Check if a given object implements the BTBaseSMJointTableRowMetadata2232 interface.
 */
export function instanceOfBTBaseSMJointTableRowMetadata2232(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBaseSMJointTableRowMetadata2232FromJSON(json: any): BTBaseSMJointTableRowMetadata2232 {
    return BTBaseSMJointTableRowMetadata2232FromJSONTyped(json, false);
}

export function BTBaseSMJointTableRowMetadata2232FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBaseSMJointTableRowMetadata2232 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSMBendTableRowMetadata-1705') {
            return BTSMBendTableRowMetadata1705FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSMOtherJointTableRowMetadata-2640') {
            return BTSMOtherJointTableRowMetadata2640FromJSONTyped(json, true);
        }
    }
    return {
        ...BTTableBaseRowMetadata3181FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableCrossHighlightData1753FromJSON(json['crossHighlightData']),
        'crossHighlightDataIfAny': !exists(json, 'crossHighlightDataIfAny') ? undefined : BTTableCrossHighlightData1753FromJSON(json['crossHighlightDataIfAny']),
    };
}

export function BTBaseSMJointTableRowMetadata2232SuperToJSON(value?: BTBaseSMJointTableRowMetadata2232 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseRowMetadata3181SuperToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableCrossHighlightData1753ToJSON(value.crossHighlightData),
        'crossHighlightDataIfAny': BTTableCrossHighlightData1753ToJSON(value.crossHighlightDataIfAny),
    };
}



export function BTBaseSMJointTableRowMetadata2232ToJSON(value?: BTBaseSMJointTableRowMetadata2232 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTSMBendTableRowMetadata-1705') {
        return BTSMBendTableRowMetadata1705ToJSON(value);
    }
    if (value.btType === 'BTSMOtherJointTableRowMetadata-2640') {
        return BTSMOtherJointTableRowMetadata2640ToJSON(value);
    }
    return BTBaseSMJointTableRowMetadata2232SuperToJSON(value);
}
