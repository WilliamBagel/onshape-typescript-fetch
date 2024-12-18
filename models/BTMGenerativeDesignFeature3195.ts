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
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterReferenceJSON790 } from './BTMParameterReferenceJSON790';
import {
    BTMParameterReferenceJSON790FromJSON,
    BTMParameterReferenceJSON790FromJSONTyped,
    BTMParameterReferenceJSON790ToJSON,
} from './BTMParameterReferenceJSON790';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTMGenerativeDesignFeature3195
 */
export interface BTMGenerativeDesignFeature3195 extends BTMAssemblyFeature887 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMGenerativeDesignFeature3195
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195
     */
    additiveSupportsOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195
     */
    draftOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195
     */
    extrusionOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {BTMParameterReferenceJSON790}
     * @memberof BTMGenerativeDesignFeature3195
     */
    jsonRecipe?: BTMParameterReferenceJSON790;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195
     */
    millingOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195
     */
    occurrences?: Array<BTOccurrence74>;
}

/**
 * Check if a given object implements the BTMGenerativeDesignFeature3195 interface.
 */
export function instanceOfBTMGenerativeDesignFeature3195(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMGenerativeDesignFeature3195FromJSON(json: any): BTMGenerativeDesignFeature3195 {
    return BTMGenerativeDesignFeature3195FromJSONTyped(json, false);
}

export function BTMGenerativeDesignFeature3195FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMGenerativeDesignFeature3195 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMAssemblyFeature887FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'additiveSupportsOccurrences': !exists(json, 'additiveSupportsOccurrences') ? undefined : ((json['additiveSupportsOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'draftOccurrences': !exists(json, 'draftOccurrences') ? undefined : ((json['draftOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'extrusionOccurrences': !exists(json, 'extrusionOccurrences') ? undefined : ((json['extrusionOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'jsonRecipe': !exists(json, 'jsonRecipe') ? undefined : BTMParameterReferenceJSON790FromJSON(json['jsonRecipe']),
        'millingOccurrences': !exists(json, 'millingOccurrences') ? undefined : ((json['millingOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
    };
}

export function BTMGenerativeDesignFeature3195ToJSON(value?: BTMGenerativeDesignFeature3195 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMAssemblyFeature887ToJSON(value),
        'btType': value.btType,
        'additiveSupportsOccurrences': value.additiveSupportsOccurrences === undefined ? undefined : ((value.additiveSupportsOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'draftOccurrences': value.draftOccurrences === undefined ? undefined : ((value.draftOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'extrusionOccurrences': value.extrusionOccurrences === undefined ? undefined : ((value.extrusionOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'jsonRecipe': BTMParameterReferenceJSON790ToJSON(value.jsonRecipe),
        'millingOccurrences': value.millingOccurrences === undefined ? undefined : ((value.millingOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTOccurrence74ToJSON)),
    };
}

