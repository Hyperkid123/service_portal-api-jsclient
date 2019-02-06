# ServicePortalApi.UsersApi

All URIs are relative to *https://localhost/r/insights/platform/service-portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToOrder**](UsersApi.md#addToOrder) | **POST** /orders/{order_id}/items | Add an Order Item to the Order in Pending State
[**fetchPlansWithPortfolioItemId**](UsersApi.md#fetchPlansWithPortfolioItemId) | **GET** /portfolio_items/{portfolio_item_id}/service_plans | Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.
[**fetchPortfolioItemWithId**](UsersApi.md#fetchPortfolioItemWithId) | **GET** /portfolio_items/{portfolio_item_id} | Fetch a specific Portfolio Item
[**fetchPortfolioItemsWithPortfolio**](UsersApi.md#fetchPortfolioItemsWithPortfolio) | **GET** /portfolios/{portfolio_id}/portfolio_items | Fetch all portfolio items from a specific portfolio
[**fetchPortfolioWithId**](UsersApi.md#fetchPortfolioWithId) | **GET** /portfolios/{portfolio_id} | Fetch a specific Portfolio
[**fetchProviderControlParameters**](UsersApi.md#fetchProviderControlParameters) | **GET** /portfolio_items/{portfolio_item_id}/provider_control_parameters | Fetches the provider control parameters for this portfolio item, it needs to be provided when provisioning the portfolio item.
[**listOrderItem**](UsersApi.md#listOrderItem) | **GET** /orders/{order_id}/items/{order_item_id} | Get an individual order item from a given order
[**listOrderItems**](UsersApi.md#listOrderItems) | **GET** /orders/{order_id}/items | Get a list of items in a given order
[**listOrders**](UsersApi.md#listOrders) | **GET** /orders | Get a list of orders
[**listPortfolioItems**](UsersApi.md#listPortfolioItems) | **GET** /portfolio_items | API to list all portfolio items
[**listPortfolios**](UsersApi.md#listPortfolios) | **GET** /portfolios | API to list portfolios
[**listProgressMessages**](UsersApi.md#listProgressMessages) | **GET** /order_items/{order_item_id}/progress_messages | Get a list of progress messages in an item


<a name="addToOrder"></a>
# **addToOrder**
> addToOrder(orderId, orderItem)

Add an Order Item to the Order in Pending State

Add an order item to the order in Pending State 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let orderItem = new ServicePortalApi.OrderItem(); // OrderItem | 
apiInstance.addToOrder(orderId, orderItem).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **orderItem** | [**OrderItem**](OrderItem.md)|  | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="fetchPlansWithPortfolioItemId"></a>
# **fetchPlansWithPortfolioItemId**
> [ServicePlan] fetchPlansWithPortfolioItemId(portfolioItemId)

Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.

Fetch all service plans for a portfolio item 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.fetchPlansWithPortfolioItemId(portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

[**[ServicePlan]**](ServicePlan.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchPortfolioItemWithId"></a>
# **fetchPortfolioItemWithId**
> PortfolioItem fetchPortfolioItemWithId(portfolioItemId)

Fetch a specific Portfolio Item

By passing in the portfolio_item_id you can fetch a specific portfolio item 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.fetchPortfolioItemWithId(portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

[**PortfolioItem**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchPortfolioItemsWithPortfolio"></a>
# **fetchPortfolioItemsWithPortfolio**
> PortfolioItemsCollection fetchPortfolioItemsWithPortfolio(portfolioId, opts)

Fetch all portfolio items from a specific portfolio

By passing in the portfolio id you can fetch all the portfolio items in the portfolio. 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.fetchPortfolioItemsWithPortfolio(portfolioId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfolioItemsCollection**](PortfolioItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchPortfolioWithId"></a>
# **fetchPortfolioWithId**
> Portfolio fetchPortfolioWithId(portfolioId)

Fetch a specific Portfolio

By passing in the portfolio id you can fetch a specific portfolio. 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
apiInstance.fetchPortfolioWithId(portfolioId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchProviderControlParameters"></a>
# **fetchProviderControlParameters**
> ProviderControlParameters fetchProviderControlParameters(portfolioItemId)

Fetches the provider control parameters for this portfolio item, it needs to be provided when provisioning the portfolio item.

Fetch provider control parameters for a portfolio item 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.fetchProviderControlParameters(portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

[**ProviderControlParameters**](ProviderControlParameters.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrderItem"></a>
# **listOrderItem**
> OrderItem listOrderItem(orderId, orderItemId)

Get an individual order item from a given order

Get an order item associated with an order. 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let orderItemId = "orderItemId_example"; // String | The Order Item ID
apiInstance.listOrderItem(orderId, orderItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **orderItemId** | **String**| The Order Item ID | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrderItems"></a>
# **listOrderItems**
> OrderItemsCollection listOrderItems(orderId, opts)

Get a list of items in a given order

Get a list of items associated with an order. 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listOrderItems(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**OrderItemsCollection**](OrderItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> OrdersCollection listOrders(opts)

Get a list of orders

Get a list of orders associated with the logged in user. 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**OrdersCollection**](OrdersCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolioItems"></a>
# **listPortfolioItems**
> PortfolioItemsCollection listPortfolioItems(opts)

API to list all portfolio items

Returns a PortfolioItemsCollection object with an embedded array of portfolio item objects 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listPortfolioItems(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfolioItemsCollection**](PortfolioItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolios"></a>
# **listPortfolios**
> PortfoliosCollection listPortfolios(opts)

API to list portfolios

Returns a PortfoliosCollection object with an embedded array of portfolio objects 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listPortfolios(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfoliosCollection**](PortfoliosCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProgressMessages"></a>
# **listProgressMessages**
> ProgressMessagesCollection listProgressMessages(orderItemId, opts)

Get a list of progress messages in an item

Get a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages 

### Example
```javascript
import ServicePortalApi from 'service_portal_api';
let defaultClient = ServicePortalApi.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new ServicePortalApi.UsersApi();
let orderItemId = "orderItemId_example"; // String | The Order Item ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listProgressMessages(orderItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItemId** | **String**| The Order Item ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**ProgressMessagesCollection**](ProgressMessagesCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

