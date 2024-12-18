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
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

import {
     BTPTypeNameStandard291FromJSONTyped,
     BTPTypeNameUser292FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPTypeName290
 */
export interface BTPTypeName290 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPTypeName290
     */
    atomic?: boolean;
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPTypeName290
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPTypeName290
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPTypeName290
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPTypeName290
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPTypeName290
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTypeName290
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTypeName290
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTypeName290
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPTypeName290
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPTypeName290 interface.
 */
export function instanceOfBTPTypeName290(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTypeName290FromJSON(json: any): BTPTypeName290 {
    return BTPTypeName290FromJSONTyped(json, false);
}

export function BTPTypeName290FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTypeName290 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPTypeNameStandard-291') {
            return BTPTypeNameStandard291FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPTypeNameUser-292') {
            return BTPTypeNameUser292FromJSONTyped(json, true);
        }
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
    };
}

export function BTPTypeName290ToJSON(value?: BTPTypeName290 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'startSourceLocation': value.startSourceLocation,
    };
}

