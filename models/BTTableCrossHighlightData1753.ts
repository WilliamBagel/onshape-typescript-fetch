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
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
 BTTableBaseCrossHighlightData2609SuperToJSON,
} from './BTTableBaseCrossHighlightData2609';

/**
 * 
 * @export
 * @interface BTTableCrossHighlightData1753
 */
export interface BTTableCrossHighlightData1753 extends BTTableBaseCrossHighlightData2609 {
    /**
     * 
     * @type {string}
     * @memberof BTTableCrossHighlightData1753
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTTableCrossHighlightData1753
     */
    deterministicIdList?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTTableCrossHighlightData1753
     */
    featureIdList?: Array<string>;
}

/**
 * Check if a given object implements the BTTableCrossHighlightData1753 interface.
 */
export function instanceOfBTTableCrossHighlightData1753(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableCrossHighlightData1753FromJSON(json: any): BTTableCrossHighlightData1753 {
    return BTTableCrossHighlightData1753FromJSONTyped(json, false);
}

export function BTTableCrossHighlightData1753FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableCrossHighlightData1753 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableBaseCrossHighlightData2609FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicIdList': !exists(json, 'deterministicIdList') ? undefined : json['deterministicIdList'],
        'featureIdList': !exists(json, 'featureIdList') ? undefined : json['featureIdList'],
    };
}

export function BTTableCrossHighlightData1753ToJSON(value?: BTTableCrossHighlightData1753 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseCrossHighlightData2609SuperToJSON(value),
        'btType': value.btType,
        'deterministicIdList': value.deterministicIdList,
        'featureIdList': value.featureIdList,
    };
}

