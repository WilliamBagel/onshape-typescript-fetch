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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

import {
     BTMParameterReferenceAssembly938FromJSONTyped,
     BTMParameterReferencePartStudio3302FromJSONTyped,
     BTMParameterReferenceVariableStudio3550FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMParameterReferenceWithConfiguration3028
 */
export interface BTMParameterReferenceWithConfiguration3028 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementLibraryReferenceData3133}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    elementLibraryData?: BTElementLibraryReferenceData3133;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    featureScriptType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    ids?: Array<string>;
    /**
     * Element microversion that is being imported.
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    microversioId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    namespace?: string;
    /**
     * ID of the parameter's node.
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    nodeId?: string;
    /**
     * Unique ID of the parameter.
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    parameterId?: string;
}

/**
 * Check if a given object implements the BTMParameterReferenceWithConfiguration3028 interface.
 */
export function instanceOfBTMParameterReferenceWithConfiguration3028(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferenceWithConfiguration3028FromJSON(json: any): BTMParameterReferenceWithConfiguration3028 {
    return BTMParameterReferenceWithConfiguration3028FromJSONTyped(json, false);
}

export function BTMParameterReferenceWithConfiguration3028FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferenceWithConfiguration3028 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMParameterReferenceAssembly-938') {
            return BTMParameterReferenceAssembly938FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferencePartStudio-3302') {
            return BTMParameterReferencePartStudio3302FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceVariableStudio-3550') {
            return BTMParameterReferenceVariableStudio3550FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementLibraryData': !exists(json, 'elementLibraryData') ? undefined : BTElementLibraryReferenceData3133FromJSON(json['elementLibraryData']),
        'featureScriptType': !exists(json, 'featureScriptType') ? undefined : json['featureScriptType'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'microversioId': !exists(json, 'microversioId') ? undefined : json['microversioId'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
    };
}

export function BTMParameterReferenceWithConfiguration3028ToJSON(value?: BTMParameterReferenceWithConfiguration3028 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementLibraryData': BTElementLibraryReferenceData3133ToJSON(value.elementLibraryData),
        'featureScriptType': value.featureScriptType,
        'ids': value.ids,
        'importMicroversion': value.importMicroversion,
        'microversioId': value.microversioId,
        'namespace': value.namespace,
        'nodeId': value.nodeId,
        'parameterId': value.parameterId,
    };
}

