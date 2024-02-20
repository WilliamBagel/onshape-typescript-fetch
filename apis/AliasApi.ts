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
  BTAliasInfo,
  BTAliasParams,
  BTListResponseBTAliasEntryInfo,
  BTListResponseBTAliasInfo,
} from '../models';
import {
    BTAliasInfoFromJSON,
    BTAliasInfoToJSON,
    BTAliasParamsFromJSON,
    BTAliasParamsToJSON,
    BTListResponseBTAliasEntryInfoFromJSON,
    BTListResponseBTAliasEntryInfoToJSON,
    BTListResponseBTAliasInfoFromJSON,
    BTListResponseBTAliasInfoToJSON,
} from '../models';

export interface CreateAliasRequest {
    bTAliasParams: BTAliasParams;
}

export interface DeleteAliasRequest {
    aid: string;
}

export interface GetAliasRequest {
    aid: string;
}

export interface GetAliasMembersRequest {
    aid: string;
    prefix?: string;
    sortColumn?: string;
    sortOrder?: string;
    offset?: number;
    limit?: number;
}

export interface GetAliasesInCompanyRequest {
    prefix?: string;
    sortColumn?: string;
    sortOrder?: string;
    offset?: number;
    limit?: number;
}

export interface UpdateAliasRequest {
    aid: string;
    bTAliasParams: BTAliasParams;
}

/**
 * 
 */
export class AliasApi extends runtime.BaseAPI {

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     */
    async createAliasRaw(requestParameters: CreateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.bTAliasParams === null || requestParameters.bTAliasParams === undefined) {
            throw new runtime.RequiredError('bTAliasParams','Required parameter requestParameters.bTAliasParams was null or undefined when calling createAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAliasParamsToJSON(requestParameters.bTAliasParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     */
    async createAlias(requestParameters: CreateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.createAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     */
    async deleteAliasRaw(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling deleteAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     */
    async deleteAlias(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     */
    async getAliasRaw(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling getAlias.');
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
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     */
    async getAlias(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.getAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     */
    async getAliasMembersRaw(requestParameters: GetAliasMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTAliasEntryInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling getAliasMembers.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sortColumn'] = requestParameters.sortColumn;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}/members`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTAliasEntryInfoFromJSON(jsonValue));
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     */
    async getAliasMembers(requestParameters: GetAliasMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTAliasEntryInfo> {
        const response = await this.getAliasMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     */
    async getAliasesInCompanyRaw(requestParameters: GetAliasesInCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTAliasInfo>> {
        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sortColumn'] = requestParameters.sortColumn;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     */
    async getAliasesInCompany(requestParameters: GetAliasesInCompanyRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTAliasInfo> {
        const response = await this.getAliasesInCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     */
    async updateAliasRaw(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling updateAlias.');
        }

        if (requestParameters.bTAliasParams === null || requestParameters.bTAliasParams === undefined) {
            throw new runtime.RequiredError('bTAliasParams','Required parameter requestParameters.bTAliasParams was null or undefined when calling updateAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAliasParamsToJSON(requestParameters.bTAliasParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     */
    async updateAlias(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.updateAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
