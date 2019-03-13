# CatalogApi.DefaultApi

All URIs are relative to *https://localhost/r/insights/platform/catalog*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatePortfolioItem**](DefaultApi.md#updatePortfolioItem) | **PATCH** /portfolio_items/{id} | Edit an existing Portfolio Item


<a name="updatePortfolioItem"></a>
# **updatePortfolioItem**
> PortfolioItem updatePortfolioItem(id)

Edit an existing Portfolio Item

Returns the edited Portfolio Item Object

### Example
```javascript
import CatalogApi from 'catalog_api';
let defaultClient = CatalogApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new CatalogApi.DefaultApi();
let id = "id_example"; // String | ID of the resource
apiInstance.updatePortfolioItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 

### Return type

[**PortfolioItem**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

