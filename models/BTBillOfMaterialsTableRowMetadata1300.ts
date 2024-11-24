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
import type { BTTableAssemblyCrossHighlightData2675 } from './BTTableAssemblyCrossHighlightData2675';
import {
    BTTableAssemblyCrossHighlightData2675FromJSON,
    BTTableAssemblyCrossHighlightData2675FromJSONTyped,
    BTTableAssemblyCrossHighlightData2675ToJSON,
} from './BTTableAssemblyCrossHighlightData2675';
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
} from './BTTableBaseRowMetadata3181';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsTableRowMetadata1300
 */
export interface BTBillOfMaterialsTableRowMetadata1300 extends BTTableBaseRowMetadata3181 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTBillOfMaterialsTableRowMetadata1300
     */
    btType?: string;
    /**
     * 
     * @type {BTTableAssemblyCrossHighlightData2675}
     * @memberof BTBillOfMaterialsTableRowMetadata1300
     */
    crossHighlightData?: BTTableAssemblyCrossHighlightData2675;
    /**
     * 
     * @type {BTTableAssemblyCrossHighlightData2675}
     * @memberof BTBillOfMaterialsTableRowMetadata1300
     */
    crossHighlightDataIfAny?: BTTableAssemblyCrossHighlightData2675;
}

/**
 * Check if a given object implements the BTBillOfMaterialsTableRowMetadata1300 interface.
 */
export function instanceOfBTBillOfMaterialsTableRowMetadata1300(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsTableRowMetadata1300FromJSON(json: any): BTBillOfMaterialsTableRowMetadata1300 {
    return BTBillOfMaterialsTableRowMetadata1300FromJSONTyped(json, false);
}

export function BTBillOfMaterialsTableRowMetadata1300FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsTableRowMetadata1300 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableBaseRowMetadata3181FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableAssemblyCrossHighlightData2675FromJSON(json['crossHighlightData']),
        'crossHighlightDataIfAny': !exists(json, 'crossHighlightDataIfAny') ? undefined : BTTableAssemblyCrossHighlightData2675FromJSON(json['crossHighlightDataIfAny']),
    };
}

export function BTBillOfMaterialsTableRowMetadata1300ToJSON(value?: BTBillOfMaterialsTableRowMetadata1300 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseRowMetadata3181ToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableAssemblyCrossHighlightData2675ToJSON(value.crossHighlightData),
        'crossHighlightDataIfAny': BTTableAssemblyCrossHighlightData2675ToJSON(value.crossHighlightDataIfAny),
    };
}

