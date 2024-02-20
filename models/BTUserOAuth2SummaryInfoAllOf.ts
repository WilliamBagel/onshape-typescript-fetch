/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.176.31157-f17972084104
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTRole } from './BTRole';
import {
    BTRoleFromJSON,
    BTRoleFromJSONTyped,
    BTRoleToJSON,
} from './BTRole';

/**
 * 
 * @export
 * @interface BTUserOAuth2SummaryInfoAllOf
 */
export interface BTUserOAuth2SummaryInfoAllOf {
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    clientId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    companyPlan?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    oauth2Scopes?: number;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    planGroup?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    role?: number;
    /**
     * 
     * @type {Set<BTRole>}
     * @memberof BTUserOAuth2SummaryInfoAllOf
     */
    roles?: Set<BTRole>;
}

/**
 * Check if a given object implements the BTUserOAuth2SummaryInfoAllOf interface.
 */
export function instanceOfBTUserOAuth2SummaryInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserOAuth2SummaryInfoAllOfFromJSON(json: any): BTUserOAuth2SummaryInfoAllOf {
    return BTUserOAuth2SummaryInfoAllOfFromJSONTyped(json, false);
}

export function BTUserOAuth2SummaryInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserOAuth2SummaryInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'companyPlan': !exists(json, 'companyPlan') ? undefined : json['companyPlan'],
        'oauth2Scopes': !exists(json, 'oauth2Scopes') ? undefined : json['oauth2Scopes'],
        'planGroup': !exists(json, 'planGroup') ? undefined : json['planGroup'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'roles': !exists(json, 'roles') ? undefined : (new Set((json['roles'] as Array<any>).map(BTRoleFromJSON))),
    };
}

export function BTUserOAuth2SummaryInfoAllOfToJSON(value?: BTUserOAuth2SummaryInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'companyPlan': value.companyPlan,
        'oauth2Scopes': value.oauth2Scopes,
        'planGroup': value.planGroup,
        'role': value.role,
        'roles': value.roles === undefined ? undefined : (Array.from(value.roles as Set<any>).map(BTRoleToJSON)),
    };
}

