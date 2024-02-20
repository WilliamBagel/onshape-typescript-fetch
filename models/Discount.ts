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
import type { Coupon } from './Coupon';
import {
    CouponFromJSON,
    CouponFromJSONTyped,
    CouponToJSON,
} from './Coupon';

/**
 * 
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * 
     * @type {Coupon}
     * @memberof Discount
     */
    coupon?: Coupon;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    customer?: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    start?: number;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    subscription?: string;
}

/**
 * Check if a given object implements the Discount interface.
 */
export function instanceOfDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountFromJSON(json: any): Discount {
    return DiscountFromJSONTyped(json, false);
}

export function DiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Discount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon': !exists(json, 'coupon') ? undefined : CouponFromJSON(json['coupon']),
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'subscription': !exists(json, 'subscription') ? undefined : json['subscription'],
    };
}

export function DiscountToJSON(value?: Discount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon': CouponToJSON(value.coupon),
        'customer': value.customer,
        'end': value.end,
        'id': value.id,
        'object': value.object,
        'start': value.start,
        'subscription': value.subscription,
    };
}

