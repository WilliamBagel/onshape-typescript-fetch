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
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTOccurrenceData75 } from './BTOccurrenceData75';
import {
    BTOccurrenceData75FromJSON,
    BTOccurrenceData75FromJSONTyped,
    BTOccurrenceData75ToJSON,
} from './BTOccurrenceData75';

/**
 * 
 * @export
 * @interface BTOccurrenceDisplayData95
 */
export interface BTOccurrenceDisplayData95 {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceDisplayData95
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceDisplayData95
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceDisplayData95
     */
    forceHighestQualityTessellation?: boolean;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTOccurrenceDisplayData95
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceDisplayData95
     */
    isHidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceDisplayData95
     */
    isPatternDescendant?: boolean;
    /**
     * 
     * @type {BTOccurrenceData75}
     * @memberof BTOccurrenceDisplayData95
     */
    occurrenceData?: BTOccurrenceData75;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOccurrenceDisplayData95
     */
    partIds?: Array<string>;
}

/**
 * Check if a given object implements the BTOccurrenceDisplayData95 interface.
 */
export function instanceOfBTOccurrenceDisplayData95(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceDisplayData95FromJSON(json: any): BTOccurrenceDisplayData95 {
    return BTOccurrenceDisplayData95FromJSONTyped(json, false);
}

export function BTOccurrenceDisplayData95FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceDisplayData95 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'forceHighestQualityTessellation': !exists(json, 'forceHighestQualityTessellation') ? undefined : json['forceHighestQualityTessellation'],
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'isPatternDescendant': !exists(json, 'isPatternDescendant') ? undefined : json['isPatternDescendant'],
        'occurrenceData': !exists(json, 'occurrenceData') ? undefined : BTOccurrenceData75FromJSON(json['occurrenceData']),
        'partIds': !exists(json, 'partIds') ? undefined : json['partIds'],
    };
}

export function BTOccurrenceDisplayData95ToJSON(value?: BTOccurrenceDisplayData95 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementId': value.elementId,
        'forceHighestQualityTessellation': value.forceHighestQualityTessellation,
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'isHidden': value.isHidden,
        'isPatternDescendant': value.isPatternDescendant,
        'occurrenceData': BTOccurrenceData75ToJSON(value.occurrenceData),
        'partIds': value.partIds,
    };
}

