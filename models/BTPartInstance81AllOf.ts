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
import type { BTMParameterReferencePartStudio3302 } from './BTMParameterReferencePartStudio3302';
import {
    BTMParameterReferencePartStudio3302FromJSON,
    BTMParameterReferencePartStudio3302FromJSONTyped,
    BTMParameterReferencePartStudio3302ToJSON,
} from './BTMParameterReferencePartStudio3302';
import type { BTPSOIdentity2741 } from './BTPSOIdentity2741';
import {
    BTPSOIdentity2741FromJSON,
    BTPSOIdentity2741FromJSONTyped,
    BTPSOIdentity2741ToJSON,
} from './BTPSOIdentity2741';
import type { GBTPartStudioInstanceType } from './GBTPartStudioInstanceType';
import {
    GBTPartStudioInstanceTypeFromJSON,
    GBTPartStudioInstanceTypeFromJSONTyped,
    GBTPartStudioInstanceTypeToJSON,
} from './GBTPartStudioInstanceType';

/**
 * 
 * @export
 * @interface BTPartInstance81AllOf
 */
export interface BTPartInstance81AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPartInstance81AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSOIdentity2741}
     * @memberof BTPartInstance81AllOf
     */
    partIdentity?: BTPSOIdentity2741;
    /**
     * 
     * @type {string}
     * @memberof BTPartInstance81AllOf
     */
    partQuery?: string;
    /**
     * 
     * @type {BTMParameterReferencePartStudio3302}
     * @memberof BTPartInstance81AllOf
     */
    partReference?: BTMParameterReferencePartStudio3302;
    /**
     * 
     * @type {GBTPartStudioInstanceType}
     * @memberof BTPartInstance81AllOf
     */
    type?: GBTPartStudioInstanceType;
}

/**
 * Check if a given object implements the BTPartInstance81AllOf interface.
 */
export function instanceOfBTPartInstance81AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartInstance81AllOfFromJSON(json: any): BTPartInstance81AllOf {
    return BTPartInstance81AllOfFromJSONTyped(json, false);
}

export function BTPartInstance81AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartInstance81AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : BTPSOIdentity2741FromJSON(json['partIdentity']),
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'partReference': !exists(json, 'partReference') ? undefined : BTMParameterReferencePartStudio3302FromJSON(json['partReference']),
        'type': !exists(json, 'type') ? undefined : GBTPartStudioInstanceTypeFromJSON(json['type']),
    };
}

export function BTPartInstance81AllOfToJSON(value?: BTPartInstance81AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'partIdentity': BTPSOIdentity2741ToJSON(value.partIdentity),
        'partQuery': value.partQuery,
        'partReference': BTMParameterReferencePartStudio3302ToJSON(value.partReference),
        'type': GBTPartStudioInstanceTypeToJSON(value.type),
    };
}

