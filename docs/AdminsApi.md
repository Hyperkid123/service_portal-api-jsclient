# ServicePortalApi.AdminsApi

All URIs are relative to *https://localhost/r/insights/platform/service-portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPortfolioItemToPortfolio**](AdminsApi.md#addPortfolioItemToPortfolio) | **POST** /portfolios/{portfolio_id}/portfolio_items | Add Portfolio item to a portfolio
[**addToOrder**](AdminsApi.md#addToOrder) | **POST** /orders/{order_id}/order_items | Add an Order Item to the Order in Pending State
[**createOrder**](AdminsApi.md#createOrder) | **POST** /orders | Create a new order
[**createPortfolio**](AdminsApi.md#createPortfolio) | **POST** /portfolios | API to add a new portfolio
[**createPortfolioItem**](AdminsApi.md#createPortfolioItem) | **POST** /portfolio_items | API to add a new portfolio item
[**destroyPortfolio**](AdminsApi.md#destroyPortfolio) | **DELETE** /portfolios/{id} | Delete an existing portfolio
[**destroyPortfolioItem**](AdminsApi.md#destroyPortfolioItem) | **DELETE** /portfolio_items/{id} | Delete an existing portfolio item
[**fetchPortfolioItemsWithPortfolio**](AdminsApi.md#fetchPortfolioItemsWithPortfolio) | **GET** /portfolios/{portfolio_id}/portfolio_items | Fetch all portfolio items from a specific portfolio
[**listOrderItems**](AdminsApi.md#listOrderItems) | **GET** /orders/{order_id}/order_items | Get a list of items in a given order
[**listOrders**](AdminsApi.md#listOrders) | **GET** /orders | Get a list of orders
[**listPortfolioItems**](AdminsApi.md#listPortfolioItems) | **GET** /portfolio_items | API to list all portfolio items
[**listPortfolios**](AdminsApi.md#listPortfolios) | **GET** /portfolios | API to list portfolios
[**listProgressMessages**](AdminsApi.md#listProgressMessages) | **GET** /order_items/{order_item_id}/progress_messages | Get a list of progress messages in an item
[**listProviderControlParameters**](AdminsApi.md#listProviderControlParameters) | **GET** /portfolio_items/{portfolio_item_id}/provider_control_parameters | Fetches the provider control parameters for this portfolio item, it needs to be provided when provisioning the portfolio item.
[**listServicePlans**](AdminsApi.md#listServicePlans) | **GET** /portfolio_items/{portfolio_item_id}/service_plans | Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.
[**showOrderItem**](AdminsApi.md#showOrderItem) | **GET** /orders/{order_id}/order_items/{id} | Get an individual order item from a given order
[**showPortfolio**](AdminsApi.md#showPortfolio) | **GET** /portfolios/{id} | Fetch a specific Portfolio
[**showPortfolioItem**](AdminsApi.md#showPortfolioItem) | **GET** /portfolio_items/{id} | Fetch a specific Portfolio Item
[**submitOrder**](AdminsApi.md#submitOrder) | **POST** /orders/{order_id}/submit_order | Submit the given order
[**updatePortfolio**](AdminsApi.md#updatePortfolio) | **PATCH** /portfolios/{id} | Edit an existing portfolio


<a name="addPortfolioItemToPortfolio"></a>
# **addPortfolioItemToPortfolio**
> addPortfolioItemToPortfolio(portfolioId, addPortfolioItem)

Add Portfolio item to a portfolio

Add new portfolio item to an existing portfolio 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
let addPortfolioItem = new ServicePortalApi.AddPortfolioItem(); // AddPortfolioItem | 
apiInstance.addPortfolioItemToPortfolio(portfolioId, addPortfolioItem).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 
 **addPortfolioItem** | [**AddPortfolioItem**](AddPortfolioItem.md)|  | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

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

let apiInstance = new ServicePortalApi.AdminsApi();
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

<a name="createOrder"></a>
# **createOrder**
> Order createOrder()

Create a new order

Create a new order. 

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

let apiInstance = new ServicePortalApi.AdminsApi();
apiInstance.createOrder().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Order**](Order.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createPortfolio"></a>
# **createPortfolio**
> Portfolio createPortfolio(portfolio)

API to add a new portfolio

Returns the added portfolio object 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let portfolio = new ServicePortalApi.Portfolio(); // Portfolio | 
apiInstance.createPortfolio(portfolio).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolio** | [**Portfolio**](Portfolio.md)|  | 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPortfolioItem"></a>
# **createPortfolioItem**
> PortfolioItem createPortfolioItem(createPortfolioItem)

API to add a new portfolio item

This API would connect to the Topology Service to fetch the name and description of the service offering. Returns the added portfolio item object 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let createPortfolioItem = new ServicePortalApi.CreatePortfolioItem(); // CreatePortfolioItem | 
apiInstance.createPortfolioItem(createPortfolioItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPortfolioItem** | [**CreatePortfolioItem**](CreatePortfolioItem.md)|  | 

### Return type

[**PortfolioItem**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="destroyPortfolio"></a>
# **destroyPortfolio**
> destroyPortfolio(id)

Delete an existing portfolio

Deletes the portfolio id passed in as the param. 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let id = "id_example"; // String | ID of the resource
apiInstance.destroyPortfolio(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="destroyPortfolioItem"></a>
# **destroyPortfolioItem**
> destroyPortfolioItem(id)

Delete an existing portfolio item

Deletes the portfolio item id passed in as the param. 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let id = "id_example"; // String | ID of the resource
apiInstance.destroyPortfolioItem(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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

<a name="listProviderControlParameters"></a>
# **listProviderControlParameters**
> ProviderControlParameters listProviderControlParameters(portfolioItemId)

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

let apiInstance = new ServicePortalApi.AdminsApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.listProviderControlParameters(portfolioItemId).then((data) => {
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

<a name="listServicePlans"></a>
# **listServicePlans**
> [ServicePlan] listServicePlans(portfolioItemId)

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

let apiInstance = new ServicePortalApi.AdminsApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.listServicePlans(portfolioItemId).then((data) => {
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

<a name="showOrderItem"></a>
# **showOrderItem**
> OrderItem showOrderItem(orderId, id)

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

let apiInstance = new ServicePortalApi.AdminsApi();
let orderId = "orderId_example"; // String | The Order ID
let id = "id_example"; // String | ID of the resource
apiInstance.showOrderItem(orderId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **id** | **String**| ID of the resource | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showPortfolio"></a>
# **showPortfolio**
> Portfolio showPortfolio(id)

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

let apiInstance = new ServicePortalApi.AdminsApi();
let id = "id_example"; // String | ID of the resource
apiInstance.showPortfolio(id).then((data) => {
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

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showPortfolioItem"></a>
# **showPortfolioItem**
> PortfolioItem showPortfolioItem(id)

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

let apiInstance = new ServicePortalApi.AdminsApi();
let id = "id_example"; // String | ID of the resource
apiInstance.showPortfolioItem(id).then((data) => {
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

<a name="submitOrder"></a>
# **submitOrder**
> Order submitOrder(orderId)

Submit the given order

Returns an updated order object 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let orderId = "orderId_example"; // String | The Order ID
apiInstance.submitOrder(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 

### Return type

[**Order**](Order.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePortfolio"></a>
# **updatePortfolio**
> Portfolio updatePortfolio(id, portfolio)

Edit an existing portfolio

Returns the edited portfolio object 

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

let apiInstance = new ServicePortalApi.AdminsApi();
let id = "id_example"; // String | ID of the resource
let portfolio = new ServicePortalApi.Portfolio(); // Portfolio | 
apiInstance.updatePortfolio(id, portfolio).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 
 **portfolio** | [**Portfolio**](Portfolio.md)|  | 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

