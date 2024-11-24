/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBaseEntityData33 } from './BTBaseEntityData33';
import {
    BTBaseEntityData33FromJSON,
    BTBaseEntityData33FromJSONTyped,
    BTBaseEntityData33ToJSON,
} from './BTBaseEntityData33';
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
} from './BTDomainSpecificMetadata961';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTFeatureEntity34 } from './BTFeatureEntity34';
import {
    BTFeatureEntity34FromJSON,
    BTFeatureEntity34FromJSONTyped,
    BTFeatureEntity34ToJSON,
} from './BTFeatureEntity34';

/**
 * 
 * @export
 * @interface BTBodyEntity26
 */
export interface BTBodyEntity26 extends BTFeatureEntity34 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTBodyEntity26
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBodyEntity26
     */
    doesNotUseLevelsOfDetail?: boolean;
}

/**
 * Check if a given object implements the BTBodyEntity26 interface.
 */
export function instanceOfBTBodyEntity26(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBodyEntity26FromJSON(json: any): BTBodyEntity26 {
    return BTBodyEntity26FromJSONTyped(json, false);
}

export function BTBodyEntity26FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBodyEntity26 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureEntity34FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'doesNotUseLevelsOfDetail': !exists(json, 'doesNotUseLevelsOfDetail') ? undefined : json['doesNotUseLevelsOfDetail'],
    };
}

export function BTBodyEntity26ToJSON(value?: BTBodyEntity26 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureEntity34ToJSON(value),
        'btType': value.btType,
        'doesNotUseLevelsOfDetail': value.doesNotUseLevelsOfDetail,
    };
}

