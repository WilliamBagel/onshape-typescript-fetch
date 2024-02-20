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
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpecReference2789 } from './BTParameterSpecReference2789';
import {
    BTParameterSpecReference2789FromJSON,
    BTParameterSpecReference2789FromJSONTyped,
    BTParameterSpecReference2789ToJSON,
 BTParameterSpecReference2789SuperToJSON,
} from './BTParameterSpecReference2789';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTPartStudioItemType } from './GBTPartStudioItemType';
import {
    GBTPartStudioItemTypeFromJSON,
    GBTPartStudioItemTypeFromJSONTyped,
    GBTPartStudioItemTypeToJSON,
} from './GBTPartStudioItemType';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceWithConfiguration2950
 */
export interface BTParameterSpecReferenceWithConfiguration2950 extends BTParameterSpecReference2789 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceWithConfiguration2950
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterSpecReferenceWithConfiguration2950
     */
    allowAssemblies?: boolean;
    /**
     * 
     * @type {Array<GBTPartStudioItemType>}
     * @memberof BTParameterSpecReferenceWithConfiguration2950
     */
    allowedInsertableTypes?: Array<GBTPartStudioItemType>;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecReferenceWithConfiguration2950
     */
    maxNumberOfPicks?: number;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceWithConfiguration2950 interface.
 */
export function instanceOfBTParameterSpecReferenceWithConfiguration2950(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceWithConfiguration2950FromJSON(json: any): BTParameterSpecReferenceWithConfiguration2950 {
    return BTParameterSpecReferenceWithConfiguration2950FromJSONTyped(json, false);
}

export function BTParameterSpecReferenceWithConfiguration2950FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceWithConfiguration2950 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpecReference2789FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'allowAssemblies': !exists(json, 'allowAssemblies') ? undefined : json['allowAssemblies'],
        'allowedInsertableTypes': !exists(json, 'allowedInsertableTypes') ? undefined : ((json['allowedInsertableTypes'] as Array<any>).map(GBTPartStudioItemTypeFromJSON)),
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecReferenceWithConfiguration2950ToJSON(value?: BTParameterSpecReferenceWithConfiguration2950 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReference2789SuperToJSON(value),
        'btType': value.btType,
        'allowAssemblies': value.allowAssemblies,
        'allowedInsertableTypes': value.allowedInsertableTypes === undefined ? undefined : ((value.allowedInsertableTypes as Array<any>).map(GBTPartStudioItemTypeToJSON)),
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}

