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
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
 BTDomainSpecificMetadata961SuperToJSON,
} from './BTDomainSpecificMetadata961';
import type { GBTEntityType } from './GBTEntityType';
import {
    GBTEntityTypeFromJSON,
    GBTEntityTypeFromJSONTyped,
    GBTEntityTypeToJSON,
} from './GBTEntityType';

/**
 * 
 * @export
 * @interface BTSMSpecificMetadata1315
 */
export interface BTSMSpecificMetadata1315 extends BTDomainSpecificMetadata961 {
    /**
     * 
     * @type {string}
     * @memberof BTSMSpecificMetadata1315
     */
    btType?: string;
    /**
     * 
     * @type {GBTEntityType}
     * @memberof BTSMSpecificMetadata1315
     */
    definitionEntityType?: GBTEntityType;
}

/**
 * Check if a given object implements the BTSMSpecificMetadata1315 interface.
 */
export function instanceOfBTSMSpecificMetadata1315(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSMSpecificMetadata1315FromJSON(json: any): BTSMSpecificMetadata1315 {
    return BTSMSpecificMetadata1315FromJSONTyped(json, false);
}

export function BTSMSpecificMetadata1315FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSMSpecificMetadata1315 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDomainSpecificMetadata961FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'definitionEntityType': !exists(json, 'definitionEntityType') ? undefined : GBTEntityTypeFromJSON(json['definitionEntityType']),
    };
}

export function BTSMSpecificMetadata1315ToJSON(value?: BTSMSpecificMetadata1315 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDomainSpecificMetadata961SuperToJSON(value),
        'btType': value.btType,
        'definitionEntityType': GBTEntityTypeToJSON(value.definitionEntityType),
    };
}

