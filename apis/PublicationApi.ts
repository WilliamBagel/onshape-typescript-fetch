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


import * as runtime from '../runtime';
import type {
  BTPublicationBulkItemParams,
  BTPublicationInfo,
  BTPublicationItemParams,
  BTPublicationParams,
} from '../models';
import {
    BTPublicationBulkItemParamsFromJSON,
    BTPublicationBulkItemParamsToJSON,
    BTPublicationInfoFromJSON,
    BTPublicationInfoToJSON,
    BTPublicationItemParamsFromJSON,
    BTPublicationItemParamsToJSON,
    BTPublicationParamsFromJSON,
    BTPublicationParamsToJSON,
} from '../models';

export interface AddItemToPublicationRequest {
    pid: string;
    bTPublicationItemParams: BTPublicationItemParams;
}

export interface AddItemsToPublicationRequest {
    pid: string;
    bTPublicationBulkItemParams: BTPublicationBulkItemParams;
}

export interface CreatePublicationRequest {
    bTPublicationParams: BTPublicationParams;
}

export interface DeletePublicationItemRequest {
    pid: string;
    iid: string;
}

export interface GetPublicationItemsRequest {
    pid: string;
}

export interface UpdatePublicationAttributesRequest {
    pid: string;
    bTPublicationParams: BTPublicationParams;
}

/**
 * 
 */
export class PublicationApi extends runtime.BaseAPI {

    /**
     * Add an item in a publication.
     */
    async addItemToPublicationRaw(requestParameters: AddItemToPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPublicationInfo>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling addItemToPublication.');
        }

        if (requestParameters.bTPublicationItemParams === null || requestParameters.bTPublicationItemParams === undefined) {
            throw new runtime.RequiredError('bTPublicationItemParams','Required parameter requestParameters.bTPublicationItemParams was null or undefined when calling addItemToPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications/{pid}/item`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPublicationItemParamsToJSON(requestParameters.bTPublicationItemParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPublicationInfoFromJSON(jsonValue));
    }

    /**
     * Add an item in a publication.
     */
    async addItemToPublication(requestParameters: AddItemToPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPublicationInfo> {
        const response = await this.addItemToPublicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add publication items in bulk.
     */
    async addItemsToPublicationRaw(requestParameters: AddItemsToPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPublicationInfo>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling addItemsToPublication.');
        }

        if (requestParameters.bTPublicationBulkItemParams === null || requestParameters.bTPublicationBulkItemParams === undefined) {
            throw new runtime.RequiredError('bTPublicationBulkItemParams','Required parameter requestParameters.bTPublicationBulkItemParams was null or undefined when calling addItemsToPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications/{pid}/items`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPublicationBulkItemParamsToJSON(requestParameters.bTPublicationBulkItemParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPublicationInfoFromJSON(jsonValue));
    }

    /**
     * Add publication items in bulk.
     */
    async addItemsToPublication(requestParameters: AddItemsToPublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPublicationInfo> {
        const response = await this.addItemsToPublicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new publication.
     */
    async createPublicationRaw(requestParameters: CreatePublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPublicationInfo>> {
        if (requestParameters.bTPublicationParams === null || requestParameters.bTPublicationParams === undefined) {
            throw new runtime.RequiredError('bTPublicationParams','Required parameter requestParameters.bTPublicationParams was null or undefined when calling createPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPublicationParamsToJSON(requestParameters.bTPublicationParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPublicationInfoFromJSON(jsonValue));
    }

    /**
     * Create a new publication.
     */
    async createPublication(requestParameters: CreatePublicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPublicationInfo> {
        const response = await this.createPublicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove an item from a publication.
     */
    async deletePublicationItemRaw(requestParameters: DeletePublicationItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling deletePublicationItem.');
        }

        if (requestParameters.iid === null || requestParameters.iid === undefined) {
            throw new runtime.RequiredError('iid','Required parameter requestParameters.iid was null or undefined when calling deletePublicationItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications/{pid}/item/{iid}`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))).replace(`{${"iid"}}`, encodeURIComponent(String(requestParameters.iid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Remove an item from a publication.
     */
    async deletePublicationItem(requestParameters: DeletePublicationItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deletePublicationItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all items in a publication.
     */
    async getPublicationItemsRaw(requestParameters: GetPublicationItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPublicationInfo>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling getPublicationItems.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications/{pid}/items`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPublicationInfoFromJSON(jsonValue));
    }

    /**
     * Get all items in a publication.
     */
    async getPublicationItems(requestParameters: GetPublicationItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPublicationInfo> {
        const response = await this.getPublicationItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update publication\'s attributes name, description, and notes.
     */
    async updatePublicationAttributesRaw(requestParameters: UpdatePublicationAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling updatePublicationAttributes.');
        }

        if (requestParameters.bTPublicationParams === null || requestParameters.bTPublicationParams === undefined) {
            throw new runtime.RequiredError('bTPublicationParams','Required parameter requestParameters.bTPublicationParams was null or undefined when calling updatePublicationAttributes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/publications/{pid}`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPublicationParamsToJSON(requestParameters.bTPublicationParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update publication\'s attributes name, description, and notes.
     */
    async updatePublicationAttributes(requestParameters: UpdatePublicationAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.updatePublicationAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
