# ServicePortalApi.AdminsApi

All URIs are relative to *https://localhost/r/insights/platform/service-portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPortfolio**](AdminsApi.md#addPortfolio) | **POST** /portfolios | API to add a new portfolio
[**addPortfolioItem**](AdminsApi.md#addPortfolioItem) | **POST** /portfolio_items | API to add a new portfolio item
[**addPortfolioItemToPortfolio**](AdminsApi.md#addPortfolioItemToPortfolio) | **POST** /portfolios/{portfolio_id}/portfolio_items | Add Portfolio item to a portfolio
[**addToOrder**](AdminsApi.md#addToOrder) | **POST** /orders/{order_id}/items | Add an Order Item to the Order in Pending State
[**destroyPortfolio**](AdminsApi.md#destroyPortfolio) | **DELETE** /portfolios/{portfolio_id} | Delete an existing portfolio
[**destroyPortfolioItem**](AdminsApi.md#destroyPortfolioItem) | **DELETE** /portfolio_items/{portfolio_item_id} | Delete an existing portfolio item
[**editPortfolio**](AdminsApi.md#editPortfolio) | **PATCH** /portfolios/{portfolio_id} | Edit an existing portfolio
[**fetchPlansWithPortfolioItemId**](AdminsApi.md#fetchPlansWithPortfolioItemId) | **GET** /portfolio_items/{portfolio_item_id}/service_plans | Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.
[**fetchPortfolioItemFromPortfolio**](AdminsApi.md#fetchPortfolioItemFromPortfolio) | **GET** /portfolios/{portfolio_id}/portfolio_items/{portfolio_item_id} | Fetch a single portfolio item from a specific portfolio
[**fetchPortfolioItemsWithPortfolio**](AdminsApi.md#fetchPortfolioItemsWithPortfolio) | **GET** /portfolios/{portfolio_id}/portfolio_items | Fetch all portfolio items from a specific portfolio
[**fetchPortfolioWithId**](AdminsApi.md#fetchPortfolioWithId) | **GET** /portfolios/{portfolio_id} | Fetch a specific Portfolio
[**listOrderItem**](AdminsApi.md#listOrderItem) | **GET** /orders/{order_id}/items/{order_item_id} | Get an individual order item from a given order
[**listOrderItems**](AdminsApi.md#listOrderItems) | **GET** /orders/{order_id}/items | Get a list of items in a given order
[**listOrders**](AdminsApi.md#listOrders) | **GET** /orders | Get a list of orders
[**listPortfolioItems**](AdminsApi.md#listPortfolioItems) | **GET** /portfolio_items | API to list all portfolio items
[**listPortfolios**](AdminsApi.md#listPortfolios) | **GET** /portfolios | API to list portfolios
[**listProgressMessages**](AdminsApi.md#listProgressMessages) | **GET** /order_items/{order_item_id}/progress_messages | Get a list of progress messages in an item
[**newOrder**](AdminsApi.md#newOrder) | **POST** /orders | Create a new order
[**submitOrder**](AdminsApi.md#submitOrder) | **POST** /orders/{order_id} | Submit the given order


<a name="addPortfolio"></a>
# **addPortfolio**
> Portfolio addPortfolio(portfolio)

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
apiInstance.addPortfolio(portfolio).then((data) => {
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

<a name="addPortfolioItem"></a>
# **addPortfolioItem**
> PortfolioItem addPortfolioItem(createPortfolioItem)

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
apiInstance.addPortfolioItem(createPortfolioItem).then((data) => {
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

<a name="destroyPortfolio"></a>
# **destroyPortfolio**
> Portfolio destroyPortfolio(portfolioId)

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
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
apiInstance.destroyPortfolio(portfolioId).then((data) => {
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

<a name="destroyPortfolioItem"></a>
# **destroyPortfolioItem**
> destroyPortfolioItem(portfolioItemId)

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
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.destroyPortfolioItem(portfolioItemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editPortfolio"></a>
# **editPortfolio**
> Portfolio editPortfolio(portfolioId, portfolio)

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
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
let portfolio = new ServicePortalApi.Portfolio(); // Portfolio | 
apiInstance.editPortfolio(portfolioId, portfolio).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 
 **portfolio** | [**Portfolio**](Portfolio.md)|  | 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

let apiInstance = new ServicePortalApi.AdminsApi();
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

<a name="fetchPortfolioItemFromPortfolio"></a>
# **fetchPortfolioItemFromPortfolio**
> PortfolioItem fetchPortfolioItemFromPortfolio(portfolioId, portfolioItemId)

Fetch a single portfolio item from a specific portfolio

By passing in the portfolio id and portfolio_item_id you can fetch the portfolio items in the portfolio. 

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
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.fetchPortfolioItemFromPortfolio(portfolioId, portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 
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
> [PortfolioItem] fetchPortfolioItemsWithPortfolio(portfolioId)

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
apiInstance.fetchPortfolioItemsWithPortfolio(portfolioId).then((data) => {
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

[**[PortfolioItem]**](PortfolioItem.md)

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

let apiInstance = new ServicePortalApi.AdminsApi();
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

let apiInstance = new ServicePortalApi.AdminsApi();
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
> [OrderItem] listOrderItems(orderId)

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
apiInstance.listOrderItems(orderId).then((data) => {
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

[**[OrderItem]**](OrderItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> [Order] listOrders()

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
apiInstance.listOrders().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Order]**](Order.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolioItems"></a>
# **listPortfolioItems**
> [PortfolioItem] listPortfolioItems()

API to list all portfolio items

Returns an array of portfolio item objects 

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
apiInstance.listPortfolioItems().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PortfolioItem]**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolios"></a>
# **listPortfolios**
> [Portfolio] listPortfolios()

API to list portfolios

Returns an array of portfolio objects 

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
apiInstance.listPortfolios().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Portfolio]**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProgressMessages"></a>
# **listProgressMessages**
> [ProgressMessage] listProgressMessages(orderItemId)

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
apiInstance.listProgressMessages(orderItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItemId** | **String**| The Order Item ID | 

### Return type

[**[ProgressMessage]**](ProgressMessage.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="newOrder"></a>
# **newOrder**
> Order newOrder()

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
apiInstance.newOrder().then((data) => {
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

