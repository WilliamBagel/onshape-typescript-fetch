/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableAssemblyCrossHighlightData2675 } from './BTTableAssemblyCrossHighlightData2675';
import {
    BTTableAssemblyCrossHighlightData2675FromJSON,
    BTTableAssemblyCrossHighlightData2675FromJSONTyped,
    BTTableAssemblyCrossHighlightData2675ToJSON,
} from './BTTableAssemblyCrossHighlightData2675';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsTableRowMetadata1300AllOf
 */
export interface BTBillOfMaterialsTableRowMetadata1300AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRowMetadata1300AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTTableAssemblyCrossHighlightData2675}
     * @memberof BTBillOfMaterialsTableRowMetadata1300AllOf
     */
    crossHighlightData?: BTTableAssemblyCrossHighlightData2675;
    /**
     * 
     * @type {BTTableAssemblyCrossHighlightData2675}
     * @memberof BTBillOfMaterialsTableRowMetadata1300AllOf
     */
    crossHighlightDataIfAny?: BTTableAssemblyCrossHighlightData2675;
}

/**
 * Check if a given object implements the BTBillOfMaterialsTableRowMetadata1300AllOf interface.
 */
export function instanceOfBTBillOfMaterialsTableRowMetadata1300AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsTableRowMetadata1300AllOfFromJSON(json: any): BTBillOfMaterialsTableRowMetadata1300AllOf {
    return BTBillOfMaterialsTableRowMetadata1300AllOfFromJSONTyped(json, false);
}

export function BTBillOfMaterialsTableRowMetadata1300AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsTableRowMetadata1300AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableAssemblyCrossHighlightData2675FromJSON(json['crossHighlightData']),
        'crossHighlightDataIfAny': !exists(json, 'crossHighlightDataIfAny') ? undefined : BTTableAssemblyCrossHighlightData2675FromJSON(json['crossHighlightDataIfAny']),
    };
}

export function BTBillOfMaterialsTableRowMetadata1300AllOfToJSON(value?: BTBillOfMaterialsTableRowMetadata1300AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'crossHighlightData': BTTableAssemblyCrossHighlightData2675ToJSON(value.crossHighlightData),
        'crossHighlightDataIfAny': BTTableAssemblyCrossHighlightData2675ToJSON(value.crossHighlightDataIfAny),
    };
}
