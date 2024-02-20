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
import type { BTDiscount } from './BTDiscount';
import {
    BTDiscountFromJSON,
    BTDiscountFromJSONTyped,
    BTDiscountToJSON,
} from './BTDiscount';
import type { BTPrivacyConsentInfo } from './BTPrivacyConsentInfo';
import {
    BTPrivacyConsentInfoFromJSON,
    BTPrivacyConsentInfoFromJSONTyped,
    BTPrivacyConsentInfoToJSON,
} from './BTPrivacyConsentInfo';
import type { BTUserMetricsInfo } from './BTUserMetricsInfo';
import {
    BTUserMetricsInfoFromJSON,
    BTUserMetricsInfoFromJSONTyped,
    BTUserMetricsInfoToJSON,
} from './BTUserMetricsInfo';

/**
 * 
 * @export
 * @interface BTUserAdminInfoAllOf
 */
export interface BTUserAdminInfoAllOf {
    /**
     * 
     * @type {BTDiscount}
     * @memberof BTUserAdminInfoAllOf
     */
    discount?: BTDiscount;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitedByEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitedDocumentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserAdminInfoAllOf
     */
    isTrialRequest?: boolean;
    /**
     * 
     * @type {Array<BTPrivacyConsentInfo>}
     * @memberof BTUserAdminInfoAllOf
     */
    privacyConsents?: Array<BTPrivacyConsentInfo>;
    /**
     * 
     * @type {BTUserMetricsInfo}
     * @memberof BTUserAdminInfoAllOf
     */
    userMetrics?: BTUserMetricsInfo;
}

/**
 * Check if a given object implements the BTUserAdminInfoAllOf interface.
 */
export function instanceOfBTUserAdminInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserAdminInfoAllOfFromJSON(json: any): BTUserAdminInfoAllOf {
    return BTUserAdminInfoAllOfFromJSONTyped(json, false);
}

export function BTUserAdminInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserAdminInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount': !exists(json, 'discount') ? undefined : BTDiscountFromJSON(json['discount']),
        'invitationId': !exists(json, 'invitationId') ? undefined : json['invitationId'],
        'invitedByEmail': !exists(json, 'invitedByEmail') ? undefined : json['invitedByEmail'],
        'invitedDocumentId': !exists(json, 'invitedDocumentId') ? undefined : json['invitedDocumentId'],
        'isTrialRequest': !exists(json, 'isTrialRequest') ? undefined : json['isTrialRequest'],
        'privacyConsents': !exists(json, 'privacyConsents') ? undefined : ((json['privacyConsents'] as Array<any>).map(BTPrivacyConsentInfoFromJSON)),
        'userMetrics': !exists(json, 'userMetrics') ? undefined : BTUserMetricsInfoFromJSON(json['userMetrics']),
    };
}

export function BTUserAdminInfoAllOfToJSON(value?: BTUserAdminInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount': BTDiscountToJSON(value.discount),
        'invitationId': value.invitationId,
        'invitedByEmail': value.invitedByEmail,
        'invitedDocumentId': value.invitedDocumentId,
        'isTrialRequest': value.isTrialRequest,
        'privacyConsents': value.privacyConsents === undefined ? undefined : ((value.privacyConsents as Array<any>).map(BTPrivacyConsentInfoToJSON)),
        'userMetrics': BTUserMetricsInfoToJSON(value.userMetrics),
    };
}

