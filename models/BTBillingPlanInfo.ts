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
import type { BTDiscountInfo } from './BTDiscountInfo';
import {
    BTDiscountInfoFromJSON,
    BTDiscountInfoFromJSONTyped,
    BTDiscountInfoToJSON,
} from './BTDiscountInfo';

/**
 * 
 * @export
 * @interface BTBillingPlanInfo
 */
export interface BTBillingPlanInfo {
    /**
     * 
     * @type {number}
     * @memberof BTBillingPlanInfo
     */
    amountCents?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    applicationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    clientId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillingPlanInfo
     */
    companyPlan?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTBillingPlanInfo
     */
    consumableQuantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillingPlanInfo
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    description?: string;
    /**
     * 
     * @type {BTDiscountInfo}
     * @memberof BTBillingPlanInfo
     */
    discountInfo?: BTDiscountInfo;
    /**
     * 
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    group?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillingPlanInfo
     */
    hidden?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    interval?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillingPlanInfo
     */
    onshapePlan?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTBillingPlanInfo
     */
    planType?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBillingPlanInfo
     */
    trialPeriodDays?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTBillingPlanInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTBillingPlanInfo interface.
 */
export function instanceOfBTBillingPlanInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillingPlanInfoFromJSON(json: any): BTBillingPlanInfo {
    return BTBillingPlanInfoFromJSONTyped(json, false);
}

export function BTBillingPlanInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillingPlanInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountCents': !exists(json, 'amountCents') ? undefined : json['amountCents'],
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'companyPlan': !exists(json, 'companyPlan') ? undefined : json['companyPlan'],
        'consumableQuantity': !exists(json, 'consumableQuantity') ? undefined : json['consumableQuantity'],
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discountInfo': !exists(json, 'discountInfo') ? undefined : BTDiscountInfoFromJSON(json['discountInfo']),
        'group': !exists(json, 'group') ? undefined : json['group'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'onshapePlan': !exists(json, 'onshapePlan') ? undefined : json['onshapePlan'],
        'planType': !exists(json, 'planType') ? undefined : json['planType'],
        'trialPeriodDays': !exists(json, 'trialPeriodDays') ? undefined : json['trialPeriodDays'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTBillingPlanInfoToJSON(value?: BTBillingPlanInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountCents': value.amountCents,
        'applicationId': value.applicationId,
        'clientId': value.clientId,
        'companyPlan': value.companyPlan,
        'consumableQuantity': value.consumableQuantity,
        'deprecated': value.deprecated,
        'description': value.description,
        'discountInfo': BTDiscountInfoToJSON(value.discountInfo),
        'group': value.group,
        'hidden': value.hidden,
        'href': value.href,
        'id': value.id,
        'interval': value.interval,
        'name': value.name,
        'onshapePlan': value.onshapePlan,
        'planType': value.planType,
        'trialPeriodDays': value.trialPeriodDays,
        'viewRef': value.viewRef,
    };
}

