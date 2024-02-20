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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';

import {
     BTEntityDeletion24FromJSONTyped,
    BTEntityDeletion24ToJSON,
     BTFeatureEntity34FromJSONTyped,
    BTFeatureEntity34ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTBaseEntityData33
 */
export interface BTBaseEntityData33 {
    /**
     * 
     * @type {string}
     * @memberof BTBaseEntityData33
     */
    btType?: string;
    /**
     * 
     * @type {BTBaseEntityData33}
     * @memberof BTBaseEntityData33
     */
    copyWithoutGeometry?: BTBaseEntityData33;
    /**
     * 
     * @type {BTBaseEntityData33}
     * @memberof BTBaseEntityData33
     */
    decompressed?: BTBaseEntityData33;
    /**
     * 
     * @type {boolean}
     * @memberof BTBaseEntityData33
     */
    deletion?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBaseEntityData33
     */
    featureIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTBaseEntityData33
     */
    fromSketch?: boolean;
    /**
     * 
     * @type {Array<BTEntityGeometry35>}
     * @memberof BTBaseEntityData33
     */
    geometries?: Array<BTEntityGeometry35>;
}

/**
 * Check if a given object implements the BTBaseEntityData33 interface.
 */
export function instanceOfBTBaseEntityData33(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBaseEntityData33FromJSON(json: any): BTBaseEntityData33 {
    return BTBaseEntityData33FromJSONTyped(json, false);
}

export function BTBaseEntityData33FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBaseEntityData33 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTEntityDeletion-24') {
            return BTEntityDeletion24FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureEntity-34') {
            return BTFeatureEntity34FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'copyWithoutGeometry': !exists(json, 'copyWithoutGeometry') ? undefined : BTBaseEntityData33FromJSON(json['copyWithoutGeometry']),
        'decompressed': !exists(json, 'decompressed') ? undefined : BTBaseEntityData33FromJSON(json['decompressed']),
        'deletion': !exists(json, 'deletion') ? undefined : json['deletion'],
        'featureIds': !exists(json, 'featureIds') ? undefined : json['featureIds'],
        'fromSketch': !exists(json, 'fromSketch') ? undefined : json['fromSketch'],
        'geometries': !exists(json, 'geometries') ? undefined : ((json['geometries'] as Array<any>).map(BTEntityGeometry35FromJSON)),
    };
}

export function BTBaseEntityData33SuperToJSON(value?: BTBaseEntityData33 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'copyWithoutGeometry': BTBaseEntityData33ToJSON(value.copyWithoutGeometry),
        'decompressed': BTBaseEntityData33ToJSON(value.decompressed),
        'deletion': value.deletion,
        'featureIds': value.featureIds,
        'fromSketch': value.fromSketch,
        'geometries': value.geometries === undefined ? undefined : ((value.geometries as Array<any>).map(BTEntityGeometry35ToJSON)),
    };
}



export function BTBaseEntityData33ToJSON(value?: BTBaseEntityData33 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTEntityDeletion-24') {
        return BTEntityDeletion24ToJSON(value);
    }
    if (value.btType === 'BTFeatureEntity-34') {
        return BTFeatureEntity34ToJSON(value);
    }
    return BTBaseEntityData33SuperToJSON(value);
}
