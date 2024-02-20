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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTRootAssemblyDisplayData96 } from './BTRootAssemblyDisplayData96';
import {
    BTRootAssemblyDisplayData96FromJSON,
    BTRootAssemblyDisplayData96FromJSONTyped,
    BTRootAssemblyDisplayData96ToJSON,
} from './BTRootAssemblyDisplayData96';
import type { BTSingleReferenceDisplayData1943 } from './BTSingleReferenceDisplayData1943';
import {
    BTSingleReferenceDisplayData1943FromJSON,
    BTSingleReferenceDisplayData1943FromJSONTyped,
    BTSingleReferenceDisplayData1943ToJSON,
 BTSingleReferenceDisplayData1943SuperToJSON,
} from './BTSingleReferenceDisplayData1943';
import type { GBTBSFeatureVisibility } from './GBTBSFeatureVisibility';
import {
    GBTBSFeatureVisibilityFromJSON,
    GBTBSFeatureVisibilityFromJSONTyped,
    GBTBSFeatureVisibilityToJSON,
} from './GBTBSFeatureVisibility';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

/**
 * 
 * @export
 * @interface BTSingleAssemblyReferenceDisplayData1557
 */
export interface BTSingleAssemblyReferenceDisplayData1557 extends BTSingleReferenceDisplayData1943 {
    /**
     * 
     * @type {string}
     * @memberof BTSingleAssemblyReferenceDisplayData1557
     */
    btType?: string;
    /**
     * 
     * @type {BTRootAssemblyDisplayData96}
     * @memberof BTSingleAssemblyReferenceDisplayData1557
     */
    assemblyDisplayData?: BTRootAssemblyDisplayData96;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTSingleAssemblyReferenceDisplayData1557
     */
    occurrencesToExclude?: Array<BTOccurrence74>;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTSingleAssemblyReferenceDisplayData1557
     */
    transform?: BTBSMatrix386;
}

/**
 * Check if a given object implements the BTSingleAssemblyReferenceDisplayData1557 interface.
 */
export function instanceOfBTSingleAssemblyReferenceDisplayData1557(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSingleAssemblyReferenceDisplayData1557FromJSON(json: any): BTSingleAssemblyReferenceDisplayData1557 {
    return BTSingleAssemblyReferenceDisplayData1557FromJSONTyped(json, false);
}

export function BTSingleAssemblyReferenceDisplayData1557FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSingleAssemblyReferenceDisplayData1557 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSingleReferenceDisplayData1943FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'assemblyDisplayData': !exists(json, 'assemblyDisplayData') ? undefined : BTRootAssemblyDisplayData96FromJSON(json['assemblyDisplayData']),
        'occurrencesToExclude': !exists(json, 'occurrencesToExclude') ? undefined : ((json['occurrencesToExclude'] as Array<any>).map(BTOccurrence74FromJSON)),
        'transform': !exists(json, 'transform') ? undefined : BTBSMatrix386FromJSON(json['transform']),
    };
}

export function BTSingleAssemblyReferenceDisplayData1557ToJSON(value?: BTSingleAssemblyReferenceDisplayData1557 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSingleReferenceDisplayData1943SuperToJSON(value),
        'btType': value.btType,
        'assemblyDisplayData': BTRootAssemblyDisplayData96ToJSON(value.assemblyDisplayData),
        'occurrencesToExclude': value.occurrencesToExclude === undefined ? undefined : ((value.occurrencesToExclude as Array<any>).map(BTOccurrence74ToJSON)),
        'transform': BTBSMatrix386ToJSON(value.transform),
    };
}

