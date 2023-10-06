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
import type { BTInstanceControlNode750 } from './BTInstanceControlNode750';
import {
    BTInstanceControlNode750FromJSON,
    BTInstanceControlNode750FromJSONTyped,
    BTInstanceControlNode750ToJSON,
} from './BTInstanceControlNode750';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';

/**
 * 
 * @export
 * @interface BTParametricInstance2641AllOf
 */
export interface BTParametricInstance2641AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTParametricInstance2641AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTMAssemblyFeature887}
     * @memberof BTParametricInstance2641AllOf
     */
    feature?: BTMAssemblyFeature887;
    /**
     * 
     * @type {string}
     * @memberof BTParametricInstance2641AllOf
     */
    featureId?: string;
    /**
     * 
     * @type {Array<BTInstanceControlNode750>}
     * @memberof BTParametricInstance2641AllOf
     */
    instanceControlNodes?: Array<BTInstanceControlNode750>;
}

/**
 * Check if a given object implements the BTParametricInstance2641AllOf interface.
 */
export function instanceOfBTParametricInstance2641AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParametricInstance2641AllOfFromJSON(json: any): BTParametricInstance2641AllOf {
    return BTParametricInstance2641AllOfFromJSONTyped(json, false);
}

export function BTParametricInstance2641AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParametricInstance2641AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'feature': !exists(json, 'feature') ? undefined : BTMAssemblyFeature887FromJSON(json['feature']),
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'instanceControlNodes': !exists(json, 'instanceControlNodes') ? undefined : ((json['instanceControlNodes'] as Array<any>).map(BTInstanceControlNode750FromJSON)),
    };
}

export function BTParametricInstance2641AllOfToJSON(value?: BTParametricInstance2641AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'feature': BTMAssemblyFeature887ToJSON(value.feature),
        'featureId': value.featureId,
        'instanceControlNodes': value.instanceControlNodes === undefined ? undefined : ((value.instanceControlNodes as Array<any>).map(BTInstanceControlNode750ToJSON)),
    };
}

